import { prefixDB, type DBKV } from './connection.ts'

interface UpdateDocumentParams {
  db: DBKV
  documentId: string
  document: string
}

interface ResponseUpdateDocument {
  versionstamp: string
  documentId: string
  document: string
}

export async function updateDocument(params: UpdateDocumentParams) {
  const { db, document, documentId } = params
  const { versionstamp, ok } = await db.set(
    prefixDB.document(documentId),
    document
  )

  if (!ok) {
    // TODO: Create a custom error type
    throw new Error('Unable to update document')
  }

  return {
    versionstamp,
    documentId,
    document,
  }
}
