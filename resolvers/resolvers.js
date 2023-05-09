const products = require("../db");

const resolvers = {
	Query: {
		products: () => products,
	},
};

module.exports = resolvers;
