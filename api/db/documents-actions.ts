import { INITIAL_DOCUMENT } from '../../constants/document.const.ts'
import { Either } from '../utils/either.ts'
import { prefixDB, type DBKV } from './connection.ts'

/**
 * UpdateDocumentParams
 * Interface to receive the parameters of the updateDocument function
 */
interface UpdateDocumentParams {
  db: DBKV
  documentId: string
  document: string
}

/**
 * CreateDocumentParams
 * Interface to receive the parameters of the createDocument function
 */
interface CreateDocumentParams {
  db: DBKV
  documentId: string
}

interface BaseResponse {
  ok: boolean
  status: number
  message: string
  versionstamp: string
  documentId: string
}

/**
 * ResponseUpdateDocument
 * Interface to return the response of the updateDocument function
 */
interface ResponseUpdateDocument extends BaseResponse {
  document: string
}

interface ResponseCreateDocument extends BaseResponse {}

/**
 * updateDocument
 * Function to update a document in the database
 */
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

  return Either.right<ResponseUpdateDocument>({
    versionstamp,
    documentId,
    document,
    ok,
    status: 200,
    message: 'Document updated successfully',
  })
}

export async function createDocument(
  params: CreateDocumentParams
): Promise<Either> {
  const { db, documentId } = params
  const { ok, versionstamp } = await db.set(
    prefixDB.document(documentId),
    INITIAL_DOCUMENT
  )

  if (!ok) return Either.left('Unable to create document')

  return Either.right<ResponseCreateDocument>({
    versionstamp,
    documentId,
    ok,
    status: 200,
    message: 'Document created successfully',
  })
}
