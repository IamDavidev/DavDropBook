import { Handlers } from '$fresh/server.ts'
import { EVENT_STREAM_OPTIONS } from '../../constants/event-stream-options.ts'

export const handler: Handlers = {
  GET(_req, _ctx) {
    return new Response('Hello World', EVENT_STREAM_OPTIONS)
  },
}
