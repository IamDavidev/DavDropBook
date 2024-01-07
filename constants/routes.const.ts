export const ROUTES = {
  API: {
    DOCUMENT: {
      NEW_ROOM: '/api/new-room',
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
