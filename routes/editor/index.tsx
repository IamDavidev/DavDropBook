import type { PageProps } from '$fresh/server.ts'
import { RoomCmp } from '../../islands/room.tsx'

export default function EditorPage(props: PageProps) {
  return (
    <div class={'bg-slate-900 w-full min-h-screen h-full grid'}>
      <div class={'flex flex-col gap-4'}>
        <span class={'text-white'}>Editor</span>
        <RoomCmp />
      </div>
    </div>
  )
}
