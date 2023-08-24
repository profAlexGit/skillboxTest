import type {RuleSetRule} from "webpack";

export const typescriptLoader: RuleSetRule = {
	test: /\.tsx?$/,
	use: 'ts-loader',
	exclude: /node_modules/
};
