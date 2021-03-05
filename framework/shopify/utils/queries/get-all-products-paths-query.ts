const getAllProductsPathsQuery = /* GraphQL */ `
  query getAllProductPaths($first: Int = 250, $cursor: String) {
    products(first: $first, after: $cursor)
      @context(provider: "vtex.next-commerce-graphql") {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          handle
        }
        cursor
      }
    }
  }
`
export default getAllProductsPathsQuery
