import { Fetcher } from '@commerce/utils/types'
import { API_TOKEN, API_URL, VTEX_API_URL } from './const'
import { handleFetchResponse } from './utils'

const VTEX_SUPPORTED_QUERIES: string[] = [
  'getAllProducts',
  'getAllProductPaths',
  'getProductBySlug',
]

const fetcher: Fetcher = async ({ method = 'POST', variables, query }) => {
  console.log('fetcher: ', query, variables)

  if (
    VTEX_SUPPORTED_QUERIES.some((queryName) =>
      (query || '').includes(queryName)
    )
  ) {
    return handleFetchResponse(
      await fetch(VTEX_API_URL, {
        method,
        body: JSON.stringify({ query, variables }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
      })
    )
  }

  return handleFetchResponse(
    await fetch(API_URL, {
      method,
      body: JSON.stringify({ query, variables }),
      headers: {
        'X-Shopify-Storefront-Access-Token': API_TOKEN!,
        'Content-Type': 'application/json',
      },
    })
  )
}

export default fetcher
