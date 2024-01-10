import { Handlers } from '$fresh/server.ts'

interface RedirectProps {
  to: string
}

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render()
  },
}

export function Redirect() {
  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  )
}
