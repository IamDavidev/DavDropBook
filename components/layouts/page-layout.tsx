import { JSX } from 'preact/jsx-runtime'

interface PageLayoutProps {
  /**
   * Page to be rendered
   */
  children: JSX.Element | JSX.Element[]
}

export const PageLayout = (props: PageLayoutProps): JSX.Element => {
  const { children } = props

  const clases = {
    layout:
      'flex justify-center items-center w-full min-h-screen h-full bg-slate-950 gap-4 text-white',
  }

  return <div class={clases.layout}>{children}</div>
}
