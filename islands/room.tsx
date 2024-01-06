import { useSignal } from '@preact/signals'
import { useEffect } from 'preact/hooks'

export function RoomCmp() {
  const id = crypto.getRandomValues(new Uint32Array(1))[0]

  const document = useSignal('# Markdown document')

  useEffect(() => {
    const evtSource = new EventSource('/api/listen-room')

    evtSource.onmessage = e => {
      const parseData = JSON.parse(e.data)
      const { document: upDoc } = parseData.data
      document.value = upDoc
    }

    console.log('evtSource', evtSource)

    return () => evtSource.close()
  })

  const classes = {
    container:
      'bg-gray-900 w-full min-h-screen text-white flex justify-center items-center flex-col gap-4',
    editorArea:
      'w-[200px] bg-[#1a202c] rounded-lg p-4 h-96 resize-none text-white',
    btns: {
      update:
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    },
  }

  // Actions

  const updateDocument = async () => {
    const response = await fetch('/api/update-doc', {
      method: 'POST',
      body: JSON.stringify({ id, document: document.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('🚀 ~ file: room.tsx:43 ~ updateDocument ~ ID:', response)

    const tmpDoc = document.value
    document.value = tmpDoc
  }

  return (
    <div class={classes.container}>
      <h1>Document {id}</h1>

      <textarea
        onInput={e => {
          const target = e.target as HTMLTextAreaElement
          document.value = target.value
        }}
        class={classes.editorArea}>
        {document}
      </textarea>

      <button class={classes.btns.update} onClick={updateDocument}>
        Update Document
      </button>
    </div>
  )
}
