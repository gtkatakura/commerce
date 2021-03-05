export const getPageQuery = /* GraphQL */ `
  query($id: ID!) @context(provider: "vtex.next-commerce-graphql") {
    node(id: $id) {
      id
      ... on Page {
        title
        handle
        body
        bodySummary
      }
    }
  }
`
export default getPageQuery
