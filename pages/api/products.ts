const { request, gql, GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4000');

interface Product {
    id: string;
    name: string;
    description: string;
  }

interface QueryResult {
    products: Product[];
  }
  

const query = gql`
  query {
    products {
      id
      name
      description
    }
  }
`

client.request(query)
  .then((data: Promise<QueryResult>) => console.log(data))
  .catch((error: Error) => console.error(error));
