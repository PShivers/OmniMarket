//runs a server at localhost 4000
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    product_id: ID!
    product_name: String!
    style: String!
    category: String!
    imageUrl: String!
    description: String!
  }

  type Query {
    products: [Product!]!
  }
`;

//dummy data
const products = [
  {
    product_id: 1,
    product_name: "Mid-Century Sofa",
    style: "Mid-Century",
    category: "Sofa",
    imageUrl: "MidCenturySofa.png",
    description:
      "Upgrade your living space with the sleek and stylish Mid-Century Sofa, featuring clean lines, retro accents, and comfortable seating perfect for modern living.",
  },
  {
    product_id: 2,
    product_name: "Rustic Wood Coffee Table",
    style: "Rustic",
    category: "Table",
    imageUrl: "RusticWoodCoffeeTable.png",
    description:
      "Add a touch of natural beauty to your living space with this Rustic Wood Coffee Table, featuring a solid wood construction and charming details that showcase the natural beauty of the materials. Perfect for those who appreciate the rustic charm and warmth of natural wood furniture.",
  },
  {
    product_id: 3,
    product_name: "Leather Accent Chair",
    style: "Traditional",
    category: "Chair",
    imageUrl: "LeatherAccentChair.png",
    description:
      "A traditional-style accent chair with leather upholstery and a sturdy wooden frame. Perfect for adding a touch of sophistication to any room.",
  },
  {
    product_id: 4,
    product_name: "Modern Glass Dining Table",
    style: "Modern",
    category: "Table",
    imageUrl: "ModernGlassDiningTable.png",
    description:
      "A modern-style dining table with a sleek, glass top and sturdy metal legs. Perfect for hosting dinner parties and gatherings with friends and family.",
  },
  {
    product_id: 5,
    product_name: "Contemporary Leather Sofa",
    style: "Contemporary",
    category: "Sofa",
    imageUrl: "ContemporaryLeatherSofa.png",
    description:
      "A luxurious leather sectional sofa with a modern design. Includes a chaise lounge and plenty of seating space, making it perfect for entertaining guests or relaxing with family.",
  },
  {
    product_id: 6,
    product_name: "Antique Writing Desk",
    style: "Antique",
    category: "Desk",
    imageUrl: "AntiqueWritingDesk.png",
    description:
      " A classic-style writing desk with a timeless design. Features a spacious work surface and multiple drawers for storing pens, paper, and other supplies.",
  },
  {
    product_id: 7,
    product_name: "Vintage Armchair",
    style: "Vintage",
    category: "Chair",
    imageUrl: "VintageArmchair.png",
    description:
      "Add timeless elegance to your living space with this Vintage Armchair. Crafted from luxurious materials, this sturdy and comfortable armchair features unique details that will make it the centerpiece of any room.",
  },
  {
    product_id: 8,
    product_name: "Industrial Bookcase",
    style: "Industrial",
    category: "Bookcase",
    imageUrl: "IndustrialBookcase.png",
    description:
      "A sturdy and stylish bookshelf with an industrial-style design. Made from metal and wood, it's perfect for displaying books, plants, and other decorative items.",
  },
  {
    product_id: 9,
    product_name: "Classic Wingback Chair",
    style: "Classic",
    category: "Chair",
    imageUrl: "ClassicWingbackChair.png",
    description:
      "Sophistication and elegance meet comfort and style in this classic wingback chair. Its button-tufted upholstery and solid construction make it a durable and long-lasting addition to any home decor.",
  },
  {
    product_id: 10,
    product_name: "Farmhouse Dining Table",
    style: "Farmhouse",
    category: "Table",
    imageUrl: "FarmhouseDiningTable.png",
    description:
      "Add rustic charm to your dining room with this Farmhouse Dining Table, featuring a sturdy construction and a timeless design that combines traditional and modern elements. Perfect for family dinners, holiday gatherings, and everyday meals, this table is sure to impress your guests and enhance the overall ambiance of your home.",
  },
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
