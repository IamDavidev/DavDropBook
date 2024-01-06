import { NewRoom } from '../islands/NewRoom.componen.tsx'

export default function Home() {
  const classes = {
    container:
      'flex justify-center items-center w-full min-h-screen h-full bg-slate-950',
  }

  return (
    <div class={classes.container}>
      <NewRoom />
    </div>
  )
}
