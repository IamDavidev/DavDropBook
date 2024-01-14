import { useSignal, type Signal } from '@preact/signals'
import { useEffect } from 'preact/hooks'

interface UserPositionProps {
  /**
   * The room id
   * @type {string} not null
   */
  roomId: string
  /**
   * The user id
   * To identify the user
   * @type {string} not null
   */
  userId: string

  /**
   * Color asign to the user
   */
  color: string
}

interface UserPosition {
  /**
   * The x position
   */
  x: number
  /**
   * The y position
   */
  y: number
  /**
   * The user id to identify the user
   */
  userId: string
}

export const UserPosition = (props: UserPositionProps) => {
  const { userId, color } = props

  const userPosition = useSignal<UserPosition>({ x: 0, y: 0, userId })

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      userPosition.value = { x: e.clientX, y: e.clientY, userId: userId }
    })
    return () => {
      document.removeEventListener('mousemove', e => {
        userPosition.value = { x: e.clientX, y: e.clientY, userId: userId }
      })
    }
  }, [])

  return (
    <div
      class='absolute w-4 h-4 rounded-full'
      style={{
        top: `${userPosition.value.y}px`,
        left: `${userPosition.value.x}px`,
        backgroundColor: color,
      }}></div>
  )
}
