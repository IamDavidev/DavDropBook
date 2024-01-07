import { Handlers } from '$fresh/server.ts'
import { PageLayout } from '../../../components/layouts/page-layout.tsx'
import { HTTP_STATUS } from '../../../constants/http.const.ts'
import { ROUTES } from '../../../constants/routes.const.ts'

export const handler: Handlers = {
  GET() {
    const id = crypto.randomUUID()
    const location = ROUTES.APP.DOCUMENT.ROOM(id)
    console.log('🚀 ~ file: create.tsx:9 ~ GET ~ path:', location)
    return new Response('', {
      status: HTTP_STATUS.TEMPORARY_REDIRECT,
      headers: {
        location,
      },
    })
  },
}

export default function CreateRoom() {
  const classes = {
    text_loading: 'text-white text-xl animate-pulse',
  }

  return (
    <PageLayout>
      <span class={classes.text_loading}>Creating a new room ...</span>
    </PageLayout>
  )
}
