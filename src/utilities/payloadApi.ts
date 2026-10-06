import { getServerSideURL } from './getURL'

type PayloadFindResult<T> = {
  docs: T[]
}

type PayloadFindQuery = {
  depth?: number
  limit?: number
  locale?: string
  pagination?: boolean
  select?: Record<string, boolean>
  sort?: string
  where?: Record<string, unknown>
}

const appendQuery = (params: URLSearchParams, key: string, value: unknown) => {
  if (value === undefined || value === null) return

  if (Array.isArray(value)) {
    value.forEach((item, index) => appendQuery(params, `${key}[${index}]`, item))
    return
  }

  if (typeof value === 'object') {
    Object.entries(value as Record<string, unknown>).forEach(([child, nested]) => {
      appendQuery(params, `${key}[${child}]`, nested)
    })
    return
  }

  params.set(key, String(value))
}

export const getPayloadApiBase = () => {
  const base = (process.env.PAYLOAD_API_URL || getServerSideURL()).replace(/\/$/, '')
  return `${base}/api`
}

export const payloadFind = async <T>(
  collection: string,
  query: PayloadFindQuery,
  tags: string[] = ['parks'],
): Promise<PayloadFindResult<T>> => {
  const params = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    appendQuery(params, key, value)
  })

  const queryString = params.toString()
  const url = `${getPayloadApiBase()}/${collection}${queryString ? `?${queryString}` : ''}`
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
    next: {
      tags,
    },
  })

  if (!response.ok) {
    throw new Error(`GET /api/${collection} failed: ${response.status}`)
  }

  return (await response.json()) as PayloadFindResult<T>
}
