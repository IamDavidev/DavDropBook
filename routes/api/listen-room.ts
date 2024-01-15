import { Handlers } from '$fresh/server.ts'

import { getNewLiveConnection } from '../../api/services/get-new-live-connection.ts'
import { CHANNELS } from '../../constants/channel.const.ts'
import { EVENT_STREAM_OPTIONS } from '../../constants/event-stream-options.ts'

export const handler: Handlers = {
  GET(_req, _ctx) {
    // const channel = new BroadcastChannel('editor-room')

    // const body = new ReadableStream({
    //   start(controller) {
    //     controller.enqueue(WAIT_CHUNK)
    //     channel.onmessage = e => {
    //       const data = e
    //       controller.enqueue(`data: ${JSON.stringify(data)}\n\n`)
    //     }
    //   },
    //   cancel() {
    //     channel.close()
    //   },
    // })

    // const response = body.pipeThrough(new TextEncoderStream())

    const connection = CHANNELS.NEW_PUBLIC_ROOM_CONNECTION('editor-room')
    const channel = connection.getChannelName as string

    const response = getNewLiveConnection({
      nameChannel: channel,
    })

    return new Response(response, EVENT_STREAM_OPTIONS)
  },
}
