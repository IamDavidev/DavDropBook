import { Handlers } from '$fresh/server.ts'
import { CHANNELS } from '../../constants/channel.const.ts'

export const handler: Handlers = {
  async POST(req) {
    const body = await req.json()
    const document = body.document
    const roomId = body.roomId

    const id = crypto.randomUUID()

    const connection = CHANNELS.NEW_PUBLIC_ROOM_CONNECTION(roomId)
    const channelName = connection.getChannelName as string

    const bc = new BroadcastChannel(channelName)

    bc.postMessage({
      document,
      id,
    })

    return Response.json({
      id,
    })
  },
}
