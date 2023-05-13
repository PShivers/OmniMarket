const products = require("../db");

const resolvers = {
	Query: {
		products: () => products,

		getProductById: (root, args, context, info) => {
			return products.find((product) => product.productId == args.productId);
		},

		getProductsByName: (root, args, context, info) => {
			return products.filter((product) => {
				return product.productName
					.toLowerCase()
					.includes(args.searchTerm.toLowerCase());
			});
		},
	},
	Mutation: {
		createProduct: (root, { product }, context, info) => {
			const lastProductId =
				products.length > 0 ? products[products.length - 1].productId : 0;
			const newProduct = {
				productId: lastProductId + 1,
				...product,
			};
			products.push(newProduct);
			return newProduct;
		},
	},
};

module.exports = resolvers;
