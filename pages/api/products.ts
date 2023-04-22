// //runs a query that calls the server created in server.js
// const { gql, GraphQLClient } = require("graphql-request");
// import { QueryResult } from "../../interfaces";

// const client = new GraphQLClient("http://localhost:4000");

// const query = gql`
//   query {
//     products {
//       id
//       name
//       description
//     }
//   }
// `;

// client
//   .request<QueryResult>(query)
//   .then((data) => console.log(data))
//   .catch((error: Error) => console.error(error));
