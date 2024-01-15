export const ROUTES = {
  API: {
    DOCUMENT: {
      /**
       * Create a path to create a new room
       *
       * @returns {string} path to create a new room
       */
      NEW_ROOM: (): string => '/api/new-room',
      /**
       * Create a path to listen a room and establish a connection
       *
       * @param roomId room id to listen a room
       * @returns {string} path to listen a room
       */
      LISTEN_ROOM: ({
        roomId,
        userId,
      }: {
        roomId: string
        userId: string
      }): string => `/api/listen-room?roomId=${roomId}&userId=${userId}`,

      /**
       * Create a path to update a document
       * @returns {string} path to update a document
       */
      UPDATE: (): string => `/api/update-doc`,
    },
  },
  APP: {
    DOCUMENT: {
      /**
       * Generate path to a room
       * @param {string} id ID of the room
       * @returns
       */
      ROOM: (id: string) => `/editor/room/${id}`,
    },
  },
}
