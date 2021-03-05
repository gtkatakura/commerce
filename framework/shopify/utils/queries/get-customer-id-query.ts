export const getCustomerQuery = /* GraphQL */ `
  query getCustomerId($customerAccessToken: String!)
  @context(provider: "vtex.next-commerce-graphql") {
    customer(customerAccessToken: $customerAccessToken) {
      id
    }
  }
`
export default getCustomerQuery
