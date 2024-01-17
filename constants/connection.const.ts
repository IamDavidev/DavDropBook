import { Connection } from '../api/models/Connection.model.ts'

export const CONNECTION = {
  /**
   * Create a new connection to a room
   * @param {string} roomId  room id to create a new unique channel connection
   * @returns  {string} channel name
   */
  NEW_PUBLIC_ROOM_CONNECTION: (roomId: string): Connection =>
    Connection.createNewConnectionPublic(roomId),
}
