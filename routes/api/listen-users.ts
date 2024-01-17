import { Handlers } from '$fresh/server.ts'
import { getNewLiveConnection } from '../../api/services/get-new-live-connection.ts'
import { CONNECTION } from '../../constants/connection.const.ts'
import { EVENT_STREAM_OPTIONS } from '../../constants/event-stream-options.ts'

export const handler: Handlers = {
  async GET(req, _ctx) {
    const body = await req.json()
    const { roomId } = body

    const connection = CONNECTION.NEW_PUBLIC_ROOM_CONNECTION(
      `${roomId}-user-positions`
    )
    const channelName = connection.getChannelName

    const response = getNewLiveConnection({
      nameChannel: channelName as string,
    })

    return new Response(response, EVENT_STREAM_OPTIONS)
  },
}
