const products = require("../db");

const resolvers = {
	Query: {
		getProducts: () => products,
		productById: (root, args, context, info) => {
			return products.find((product) => product.product_id == args.product_id);
		},
	},
};

module.exports = resolvers;
