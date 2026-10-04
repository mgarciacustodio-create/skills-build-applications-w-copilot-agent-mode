import { useEffect, useState } from 'react'
import { API_BASE_URL, normalizeCollection } from '../api.js'

function ResourceList({ apiPath, title, description, columns }) {
  const resource = apiPath.split('/').filter(Boolean).at(-1)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [reloadToken, setReloadToken] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadItems() {
      setIsLoading(true)
      setError('')

      try {
        const response = await fetch(`${API_BASE_URL}${apiPath}`, {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

        const payload = await response.json()
        setItems(normalizeCollection(payload))
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unable to load this collection.')
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    loadItems()
    return () => controller.abort()
  }, [apiPath, reloadToken])

  return (
    <section className="collection-view" aria-labelledby={`${resource}-heading`}>
      <div className="collection-kicker">
        <span>OCTOFIT / TRACKER</span>
        <span className="collection-kicker-line" />
        <span>LIVE COLLECTION</span>
      </div>

      <div className="collection-heading">
        <div>
          <h1 id={`${resource}-heading`}>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="record-count" aria-live="polite">
          <strong>{items.length.toString().padStart(2, '0')}</strong>
          <span>records</span>
        </div>
      </div>

      <div className="collection-rule" />

      {error ? (
        <div className="request-error" role="alert">
          <div>
            <strong>Couldn’t load this collection</strong>
            <p>{error}</p>
          </div>
          <button
            className="btn retry-button"
            onClick={() => setReloadToken((token) => token + 1)}
            type="button"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="table-responsive collection-table-wrap">
          <table className="table collection-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td className="table-message" colSpan={columns.length}>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true" />
                    <span>Loading {title.toLowerCase()}...</span>
                  </td>
                </tr>
              ) : items.length ? (
                items.map((item, index) => (
                  <tr key={item.id ?? item._id ?? `${resource}-${index}`}>
                    {columns.map((column) => (
                      <td key={column.key}>
                        {column.render ? column.render(item, index) : item[column.key] ?? '—'}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="table-message" colSpan={columns.length}>
                    No {title.toLowerCase()} to show yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className="collection-footnote">
        <span className="live-indicator" aria-hidden="true" />
        <span>{isLoading ? 'Syncing with API' : 'Synced with API'}</span>
        <span className="footnote-end">{apiPath}</span>
      </div>
    </section>
  )
}

export default ResourceList