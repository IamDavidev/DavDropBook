import { Signal, useSignal } from '@preact/signals'
import { useEffect } from 'preact/hooks'
import type { JSX } from 'preact/jsx-runtime'

interface EditorMDProps {
  /**
   * The room id
   * @type {string}
   */
  roomId: string
  /**
   * The document value in markdown
   * TODO: [Change for Object with more properties]
   * @type {string}
   */
  document: string
}

export function EditorMD(props: EditorMDProps): JSX.Element {
  const { roomId } = props

  const classes = {
    panel: {
      container: 'flex flex-row gap-4 items',
      editor:
        'w-1/2 lg:min-w-[400px] h-auto min-h-full bg-[#1a202c] rounded-lg resize-none text-white p-2',
      area: 'w-full min-h-[750px] h-full bg-transparent text-white resize-none border-none focus:outline-none',
      title: 'bg-slate-900 rounded-lg text-white px-2 py-1 w-fit',
    },
  }

  const document = useSignal('# Markdown document')

  const swapDocument = () => {
    const tmpDoc = document.value
    document.value = tmpDoc
  }

  const updateDocument = async () => {
    console.log('🚀 ~ updateDocument ~ document:', document.value)
    await fetch('/api/update-doc', {
      method: 'POST',
      body: JSON.stringify({ id: roomId, document: document.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    swapDocument()
  }

  useEffect(() => {
    const evtSource = new EventSource('/api/listen-room')

    evtSource.onmessage = e => {
      const parseData = JSON.parse(e.data)
      const { document: upDoc } = parseData.data
      console.log('🚀 ~ useEffect ~ upDoc:', upDoc)
      document.value = upDoc
    }

    return () => evtSource.close()
  })

  return (
    <div class={classes.panel.container}>
      <div class={classes.panel.editor}>
        <div class={classes.panel.title}>Editor</div>
        <textarea
          label={'editor'}
          value={document.value ?? ''}
          onInput={e => {
            const target = e.target as HTMLTextAreaElement
            console.log('🚀 ~ EditorMD ~ target:', target)
            document.value = target.value
            updateDocument()
          }}
          class={classes.panel.area}></textarea>
      </div>
      <div class={classes.panel.editor}>
        <div class={classes.panel.title}>Preview</div>
        <textarea label={'preview'} class={classes.panel.area}></textarea>
      </div>
    </div>
  )
}
