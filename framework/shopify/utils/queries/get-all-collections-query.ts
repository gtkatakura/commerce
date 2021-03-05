const getSiteCollectionsQuery = /* GraphQL */ `
  query getSiteCollections($first: Int!) {
    collections(first: $first)
      @context(provider: "vtex.next-commerce-graphql") {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`
export default getSiteCollectionsQuery
