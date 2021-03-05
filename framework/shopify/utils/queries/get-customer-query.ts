export const getCustomerQuery = /* GraphQL */ `
  query getCustomer($customerAccessToken: String!)
  @context(provider: "vtex.next-commerce-graphql") {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      displayName
      email
      phone
      tags
      acceptsMarketing
      createdAt
    }
  }
`
export default getCustomerQuery
