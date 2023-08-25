import {ArticleLink} from './ui/ArticleLink/ArticleLink';
import {Article, ArticleSchema} from './model/types/ArticleSchema';
import {articleSlice, articleReducer} from './model/slice/ArticleSlice';
import {ArticleDetailAsync as ArticleDetail} from './ui/ArticleDetail/ArticleDetail.async';

export {
	ArticleSchema,
	Article,
	ArticleLink,
	articleSlice,
	articleReducer,
	ArticleDetail
}
