import { useSignal } from '@preact/signals'
import { useEffect } from 'preact/hooks'

export function RoomCmp() {
  const id = crypto.getRandomValues(new Uint32Array(1))[0]
  const document = useSignal('# Markdown document')

  useEffect(() => {
    const evtSource = new EventSource('/api/listen-room')
    evtSource.onmessage = e => {
      const data = JSON.parse(e.data)
    }
    return () => evtSource.close()
  })

  const classes = {
    container: '',
  }

  return (
    <div class='bg-gray-900 w-full min-h-screen text-white'>
      <h1>Document {id}</h1>
    </div>
  )
}
