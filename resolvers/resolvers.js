const products = require("../db");

const resolvers = {
	Query: {
		getProducts: () => products,
		productById: (root, args, context, info) => {
			return products.find((product) => product.productId == args.productId);
		},

		queryProductNames: (root, args, context, info) => {
			return products.filter((product) => {
				return product.productName
					.toLowerCase()
					.includes(args.searchTerm.toLowerCase());
			});
		},
	},
};

module.exports = resolvers;
