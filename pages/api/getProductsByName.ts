import { request, gql } from 'graphql-request';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  const searchTerm = req.query.q; // get the search query from the query string

  const query = gql`
  query GetProductsByName($searchTerm: String!) {
    getProductsByName(searchTerm: $searchTerm) {
      productId
      productName
      style
      category
      imageUrl
      description
    }
  }
  `;

  try {
    const data = await request('http://localhost:4000', query, {searchTerm});    
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
