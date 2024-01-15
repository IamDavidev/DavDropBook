import { useSignal } from '@preact/signals'
import { useEffect } from 'preact/hooks'
import type { JSX } from 'preact/jsx-runtime'

import { render, CSS } from 'https://deno.land/x/gfm@0.4.0/mod.ts'
import { HTTP_METHODS } from '../constants/http.const.ts'
import { ROUTES } from '../constants/routes.const.ts'

interface EditorMDProps {
  /**
   * The room id
   * @type {string} not null
   */
  roomId: string
  /**
   * The document value in markdown
   * TODO: [Change for Object with more properties]
   * @type {string} not null
   */
  document: string
  /**
   * The user id
   * To identify the user
   * @type {string} not null
   */
  userId: string
}

export function EditorMD(props: EditorMDProps): JSX.Element {
  const { roomId, userId } = props

  const classes = {
    panel: {
      container: 'flex flex-row gap-4 items',
      editor:
        'w-1/2 min-w-[240px] lg:min-w-[400px] h-auto min-h-full bg-[#1a202c] rounded-lg resize-none text-white p-2',
      area: 'w-full min-h-[750px] h-full bg-transparent text-white resize-none border-none focus:outline-none',
      title: 'bg-slate-900 rounded-lg text-white px-2 py-1 w-fit',
    },
  }

  const rawMDDocument = useSignal('# Markdown document')

  const swapDocument = () => {
    const tmpDoc = rawMDDocument.value
    rawMDDocument.value = tmpDoc
  }

  const updateDocument = async () => {
    await fetch(ROUTES.API.DOCUMENT.UPDATE(), {
      method: HTTP_METHODS.POST,
      body: JSON.stringify({ roomId, document: rawMDDocument.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    swapDocument()
  }

  const bodyMD = render(rawMDDocument.value ?? '')

  useEffect(() => {
    const evtSource = new EventSource(
      ROUTES.API.DOCUMENT.LISTEN_ROOM({
        roomId,
        userId,
      })
    )

    evtSource.onmessage = e => {
      const parseData = JSON.parse(e.data)
      const { document: upDoc } = parseData.data
      rawMDDocument.value = upDoc
    }
  }, [])

  return (
    <div class={classes.panel.container}>
      <div class={classes.panel.editor}>
        <div class={classes.panel.title}>Editor</div>
        <textarea
          label={'editor'}
          value={rawMDDocument.value ?? ''}
          onInput={e => {
            const target = e.target as HTMLTextAreaElement
            rawMDDocument.value = target.value
            updateDocument()
          }}
          class={classes.panel.area}></textarea>
      </div>
      <div class={classes.panel.editor}>
        <div class={classes.panel.title}>Preview</div>
        <style
          dangerouslySetInnerHTML={{
            __html: CSS,
          }}></style>
        <div
          class='markdown-body'
          dangerouslySetInnerHTML={{ __html: render(bodyMD) }}
        />
      </div>
    </div>
  )
}
