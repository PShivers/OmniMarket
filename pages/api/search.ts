//runs a query that calls the server created in server.js
const { gql, GraphQLClient } = require("graphql-request");
import { QueryResult } from "../../interfaces";

const client = new GraphQLClient("http://localhost:4000");

const query = gql`
  query {
    products {
      product_id
      product_name
      style
      category
      imageUrl
      description
    }
  }
`;

client
  //   .request<QueryResult>(query)
  .request(query)
  .then((data: QueryResult) => console.log(data))
  .catch((error: Error) => console.error(error));

// import { NextApiRequest, NextApiResponse } from "next";
// import { getProducts } from "../../interfaces";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const products = await getProducts();
//       res.status(200).json(products);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
