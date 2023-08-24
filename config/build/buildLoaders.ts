import type {RuleSetRule} from "webpack";
import {BuildOptions} from "../types/config";
import {typescriptLoader} from "./loaders/typescriptLoader";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const {isDev} = options;
	
	return [
		typescriptLoader,
		buildCssLoader(isDev)
	]
}
