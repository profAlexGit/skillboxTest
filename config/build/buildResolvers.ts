import {BuildOptions} from "../types/config";
import {ResolveOptions} from "webpack";
import {pathAlias} from "./pathAlias";

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: pathAlias(options.paths.src)
	}
}
