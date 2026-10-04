const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []

  const candidates = [
    payload.data,
    payload.results,
    payload.items,
    payload.data?.results,
    payload.data?.items,
  ]

  return candidates.find(Array.isArray) ?? []
}