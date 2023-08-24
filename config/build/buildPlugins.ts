import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import type { BuildOptions } from '../types/config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {
	type WebpackPluginInstance,
	ProgressPlugin,
	DefinePlugin,
	HotModuleReplacementPlugin
} from 'webpack'

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
	const {
		paths,
		isDev,
		apiURL,
	} = options;
	
	const plugins: WebpackPluginInstance[] = [
		new HTMLWebpackPlugin({
			template: paths.html
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new DefinePlugin({
			__API__: JSON.stringify(apiURL),
		})
	];
	
	if (isDev) {
		return [
			...plugins,
			new HotModuleReplacementPlugin(),
			new ReactRefreshWebpackPlugin()
		]
	}
	
	return plugins
}
