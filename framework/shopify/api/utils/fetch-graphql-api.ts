import type { GraphQLFetcher } from '@commerce/api'
import fetch from './fetch'

import { API_URL, API_TOKEN, VTEX_API_URL } from '../../const'
import { getError } from '../../utils/handle-fetch-response'

export const VTEX_SUPPORTED_QUERIES: string[] = [
  'getAllProducts',
  'getAllProductPaths',
  'getProductBySlug',
  'getAllPages',
  'getSiteCollections',
  'getAllProductVendors',
  'getProductsFromCollection',
]

const fetchGraphqlApi: GraphQLFetcher = async (
  query: string,
  { variables } = {},
  fetchOptions
) => {
  if (VTEX_SUPPORTED_QUERIES.some((queryName) => query.includes(queryName))) {
    const res = await fetch(VTEX_API_URL, {
      ...fetchOptions,
      method: 'POST',
      headers: {
        ...fetchOptions?.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const { data, errors, status } = await res.json()

    if (errors) {
      throw getError(errors, status)
    }

    return { data, res }
  }

  // console.log(query, variables)

  const res = await fetch(API_URL, {
    ...fetchOptions,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': API_TOKEN!,
      ...fetchOptions?.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const { data, errors, status } = await res.json()

  // console.log(JSON.stringify(data))

  if (errors) {
    throw getError(errors, status)
  }

  return { data, res }
}
export default fetchGraphqlApi
