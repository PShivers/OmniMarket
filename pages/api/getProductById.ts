import { request, gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const productId = req.query.productId;

  const query = gql`
    query Query($productId: ID!) {
      getProductById(productId: $productId) {
        productId
        productName
        style
        category
        imageUrl
        description
      }
    }
  `;

  try{
    const data = await request(`http://localhost:4000`,query, {productId});
    res.status(200).json(data);
  } catch (error){
    console.error(error);
    res.status(500).json({error: `Something went wrong`})
  }
}