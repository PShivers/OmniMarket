const products = require("../db");

const resolvers = {
	Query: {
		getProducts: () => products,
		productById: (root, args, context, info) => {
			return products.find((product) => product.productId == args.productId);
		},
	},
};

module.exports = resolvers;
