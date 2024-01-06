import { Handlers } from '$fresh/server.ts'
import { HTTP_STATUS, ROUTES } from '../../constants/routes.const.ts'

export const handler: Handlers = {
  GET(req) {
    const id = crypto.randomUUID()
    // const path = new URL(req.url)
    // path.pathname = ROUTES.APP.DOCUMENT.ROOM(id)

    // console.log('🚀 ~ file: new-room.ts:8 ~ GET ~ path:', path)
    const path =
      'https://laughing-disco-rv4gj97v9vvf5qqv-8000.app.github.dev' +
      ROUTES.APP.DOCUMENT.ROOM(id)

    console.log('🚀 ~ file: new-room.ts:12 ~ GET ~ path:', path)
    return Response.redirect(path, HTTP_STATUS.REDIRECT)
  },
}
