import { PageProps } from '$fresh/server.ts'
import { JSX } from 'preact/jsx-runtime'

export default function RoomLive(props: PageProps): JSX.Element {
  const { roomId } = props.params

  const classes = {
    container: 'w-full flex flex-col justify-center',

    panel: {
      container: 'flex flex-row gap-4 px-8',
      editor: 'w-1/2 bg-[#1a202c] rounded-lg p-4 h-96 resize-none text-white',
    },
  }

  return (
    <div class={classes.container}>
      <h1>Room {roomId}</h1>

      <div class={classes.panel.container}>
        <div class={classes.panel.editor}>
          <h1>Editor</h1>
        </div>
        <div class={classes.panel.editor}>
          <h1>Preview</h1>
        </div>
      </div>
    </div>
  )
}
