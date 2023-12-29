import { useSignal } from '@preact/signals'
import Counter from '../islands/Counter.tsx'

export default function Home() {
  const count = useSignal(3)

  const classes = {
    button:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  }

  const links = {
    editor: {
      href: '/editor',
      text: 'Editor',
    },
  }

  return (
    <div class='px-4 py-8 mx-auto bg-slate-900 min-h-screen w-full'>
      <a class={classes.button} href={links.editor.href}>
        {links.editor.text}
      </a>
    </div>
  )
}
