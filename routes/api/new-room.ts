import { Handlers } from '$fresh/server.ts'
import { HTTP_STATUS, ROUTES } from '../../constants/routes.const.ts'

export const handler: Handlers = {
  GET() {
    const id = crypto.randomUUID()
    // const path = new URL(req.url)
    // path.pathname = ROUTES.APP.DOCUMENT.ROOM(id)
    // console.log('🚀 ~ file: new-room.ts:8 ~ GET ~ path:', path)
    const path = ROUTES.APP.DOCUMENT.ROOM(id)

    console.log('🚀 ~ file: new-room.ts:12 ~ GET ~ path:', path)
    return new Response(null, {
      status: HTTP_STATUS.REDIRECT,
      headers: {
        Location: path,
      },
    })
  },
}
