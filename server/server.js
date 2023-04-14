const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    products: [Product!]!
  }
`;

const products = [
  { id: "1", name: "Chair", description: "A comfortable chair" },
  { id: "2", name: "Bed", description: "A cozy bed" },
  { id: "3", name: "House", description: "A beautiful house" },
  { id: "4", name: "Sofa", description: "A plush sofa" },
];

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running on ${url}`);
});
