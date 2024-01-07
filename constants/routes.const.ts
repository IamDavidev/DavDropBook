export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

export const HTTP_STATUS = {
  //   302: '302 Found',
  //   400: '400 Bad Request',
  //   401: '401 Unauthorized',
  //   403: '403 Forbidden',
  //   404: '404 Not Found',
  //   500: '500 Internal Server Error',
  //   502: '502 Bad Gateway',
  //   204: '204 No Content',
  //   202: '202 Accepted',
  //   201: '201 Created',
  //   200: '200 OK',
  NOT_FOUND: 404,
  OK: 200,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  REDIRECT: 307,
}

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
