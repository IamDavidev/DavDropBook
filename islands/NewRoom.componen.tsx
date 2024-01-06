import * as uuid from 'https://deno.land/std@0.211.0/uuid/mod.ts'
import { HTTP_METHODS, ROUTES } from '../constants/routes.const.ts'

export function NewRoom() {
  const genNewRoom = async () => {
    await fetch(ROUTES.API.DOCUMENT.NEW_ROOM, {
      method: HTTP_METHODS.GET,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('New Room')
  }

  const classes = {
    button:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  }

  return (
    <div>
      <button class={classes.button} onClick={genNewRoom}>
        New Room
      </button>
    </div>
  )
}
