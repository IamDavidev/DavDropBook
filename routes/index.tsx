export default function Home() {
  const classes = {
    container:
      'flex justify-center items-center w-full min-h-screen h-full bg-slate-950 gap-4',
    btn: {
      new_room:
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    },
  }

  return (
    <div class={classes.container}>
      <a class={classes.btn.new_room} href={'/editor/room/create'}>
        new Room
      </a>
    </div>
  )
}
