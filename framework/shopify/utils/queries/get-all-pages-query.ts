export const getAllPagesQuery = /* GraphQL */ `
  query getAllPages($first: Int = 250) {
    pages(first: $first) @context(provider: "vtex.next-commerce-graphql") {
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
export default getAllPagesQuery
