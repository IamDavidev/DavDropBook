export class FailedUpdatedDocumentException extends Error {
  constructor() {
    super('Unable to update document')
  }
}
