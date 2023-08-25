import {lazy} from "react";

export const ArticleDetailAsync = lazy(() => import('./ArticleDetail')
	.then(module => ({default: module.ArticleDetail})))
