export function getImportMetaEnv() {
  /** { SSR:boolean } */
  return 'env' in import.meta ? (import.meta).env : {
    SSR: typeof setImmediate === 'function' && 'unref' in setTimeout(() => void 0)
  }
}