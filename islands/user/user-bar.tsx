import { useSignal } from "@preact/signals";
import { useEffect } from 'preact/hooks'

interface UserBarProps {
  users: User[]
}

interface User {
  /**
   * 
   */
  id: string

  /**
   * 
   */
  animal: string
}

export const UserBar = (props: UserBarProps) => {

  const user = useSignal(null)

  const updateANewUser = (): void => {
    console.log('update user')
  }

  const removeAUser = (): void => {
    console.log('remove user')
  }

  useEffect(() => {
    /**
     * Remove the user from the list of users
     * when the user closes the tab
     * or the browser.
     */
    document.addEventListener('beforeunload', removeAUser)

    return () => {
      document.removeEventListener('beforeunload', removeAUser)
    }
  }, [])

  return <div></div>
}
