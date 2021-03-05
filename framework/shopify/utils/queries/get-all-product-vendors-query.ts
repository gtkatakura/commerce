const getAllProductVendors = /* GraphQL */ `
  query getAllProductVendors($first: Int = 250, $cursor: String) {
    products(first: $first, after: $cursor)
      @context(provider: "vtex.next-commerce-graphql") {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          vendor
        }
        cursor
      }
    }
  }
`
export default getAllProductVendors
