import { Handlers } from '$fresh/server.ts'

import { getNewLiveConnection } from '../../api/services/get-new-live-connection.ts'
import { CHANNELS } from '../../constants/channel.const.ts'
import { EVENT_STREAM_OPTIONS } from '../../constants/event-stream-options.ts'

export const handler: Handlers = {
  GET(req, _ctx) {
    const url = new URL(req.url)
    const roomId = url.searchParams.get('roomId')

    if (!roomId) {
      return new Response('roomId is required', { status: 400 })
    }

    const connection = CHANNELS.NEW_PUBLIC_ROOM_CONNECTION(roomId)
    const channel = connection.getChannelName as string

    console.log(`New connection to ${channel}`)
    const response = getNewLiveConnection({
      nameChannel: channel,
    })

    return new Response(response, EVENT_STREAM_OPTIONS)
  },
}
