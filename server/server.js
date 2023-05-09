//runs a server at localhost 4000
const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const typeDefs = fs.readFileSync("./schema.graphql", { encoding: "utf-8" });
const products = require("../db");

const resolvers = {
	Query: {
		products: () => products,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server running on ${url}`);
});
