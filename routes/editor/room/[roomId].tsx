import { PageProps } from '$fresh/server.ts'
import { JSX } from 'preact/jsx-runtime'

export default function RoomLive(props: PageProps): JSX.Element {
  const { roomId } = props.params

  const classes = {}

  return (
    <div>
      <h1>Room {roomId}</h1>

      <div class='flex gap-4'>
        <div class='w-[200px] bg-[#1a202c] rounded-lg p-4 h-96 resize-none text-white'>
          <h1>Editor</h1>
        </div>
        <div class='w-[200px] bg-[#1a202c] rounded-lg p-4 h-96 resize-none text-white'>
          <h1>Preview</h1>
        </div>
      </div>
    </div>
  )
}
