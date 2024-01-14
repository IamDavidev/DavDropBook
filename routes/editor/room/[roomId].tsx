import { PageProps } from '$fresh/server.ts'
import type { JSX } from 'preact/jsx-runtime'

import { PageLayout } from '../../../components/layouts/page-layout.tsx'
import { EditorMD } from '../../../islands/editor-md.tsx'
import { UserPosition } from '../../../islands/user-position.tsx'
import { getUserHexColor } from '../../../api/utils/get-user-optios.ts'

export default function RoomLive(props: PageProps): JSX.Element {
  const { roomId } = props.params

  const userId = crypto.randomUUID()

  const classes = {
    container: 'flex flex-col gap-4',
    panel: {
      container: 'flex flex-row gap-4 items',
      editor:
        'w-1/2 lg:min-w-[400px] h-auto min-h-full bg-[#1a202c] rounded-lg resize-none text-white p-2',
      area: 'w-full min-h-[750px] h-full bg-transparent text-white resize-none border-none focus:outline-none',
      title: 'bg-slate-900 rounded-lg text-white px-2 py-1 w-fit',
    },
  }
  return (
    <PageLayout>
      <div class={classes.container}>
        <h1>Room {roomId}</h1>
        <EditorMD roomId={roomId} document='# Document ' userId={userId} />
      </div>
      <UserPosition roomId={roomId} userId={userId} color={getUserHexColor()} />
    </PageLayout>
  )
}
