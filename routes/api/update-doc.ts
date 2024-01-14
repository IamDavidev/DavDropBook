import { Handlers } from '$fresh/server.ts'

export const handler: Handlers = {
  async POST(req) {
    const id = crypto.randomUUID()
    const body = await req.json()
    const document = body.document

    const bc = new BroadcastChannel('editor-room')
    bc.postMessage({
      document,
      id,
    })

    return Response.json({
      id,
    })
  },
}
