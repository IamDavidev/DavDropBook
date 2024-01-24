export type DBKV = Deno.Kv
export const dbKV = await Deno.openKv()

export type Prefix = [string, string]

export const prefixDB = {
  /**
   * Return a prefix for a document to be stored in the Deno KV store
   * @param {string} documentId
   */
  document: (documentId: string): Prefix => ['document', documentId],
}
