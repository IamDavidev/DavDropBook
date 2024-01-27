import { Either } from '../utils/either.ts'
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

export async function updateDocument(
  params: UpdateDocumentParams
): Promise<Either> {
  const { db, document, documentId } = params
  const { versionstamp, ok } = await db.set(
    prefixDB.document(documentId),
    document
  )

  if (!ok) {
    return Either.left('Unable to update document')
  }

  return Either.right({
    versionstamp,
    documentId,
    document,
  })
}
