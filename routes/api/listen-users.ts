import { Handlers } from '$fresh/server.ts'
import { CONNECTION } from '../../constants/connection.const.ts'
import { EVENT_STREAM_OPTIONS } from '../../constants/event-stream-options.ts'

export const handler: Handlers = {
  async GET(req, _ctx) {
    const body = await req.json()

    const { roomId } = body

    const connection = CONNECTION.NEW_PUBLIC_ROOM_CONNECTION('user-')

    return new Response('Hello World', EVENT_STREAM_OPTIONS)
  },
}
