import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "@pages/MainPage";
import path from "path";
import {ArticlePage} from "@pages/ArticlesPage";

export enum AppRoutes {
	MAIN = 'main',
	ARTICLE = 'article'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ARTICLE]: '/article/'
}

export const router = createBrowserRouter([
	{
		path: RoutePath.main,
		element: <MainPage />,
		children: [
			{
				path: `${RoutePath.article}:id`,
				element: <ArticlePage />
			}
		]
	}
])

