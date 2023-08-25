import styles from './articleList.module.scss';
import cn from 'classnames';
import {ArticleLink} from "@entities/Article";
import {DynamicModuleLoader, ReducersList} from "@app/providers/StoreProvider";
import {articlesListReducer} from "../model/slice/articleListSlice";
import {useSelector} from "react-redux";
import {
	getArticlesList,
	getArticlesListError,
	getArticlesListIsLoading
} from "../model/selectors/articlesListSelectors";
import {useAppDispatch} from "@shared/hooks/useAppDispatch";
import {useEffect} from "react";
import {fetchArticlesList} from "@features/ArticlesList/model/service/fetchArticlesList";

interface ArticleListProps {
	className?: string;
}

const initialReducer: ReducersList = {
	articlesList: articlesListReducer
}

export const ArticleList = (props: ArticleListProps) => {
	const {
		className
	} = props;
	const dispatch = useAppDispatch();
	
	const articles = useSelector(getArticlesList);
	const isLoading = useSelector(getArticlesListIsLoading);
	const error = useSelector(getArticlesListError);
	
	useEffect(() => {
		dispatch(fetchArticlesList())
	}, [dispatch])
	
	if (isLoading) {
		return <p>LOADING...</p>
	}
	
	if (error) {
		return <p>{error}</p>
	}
	
	return (
		<DynamicModuleLoader reducers={initialReducer}>
			<div
				className={cn(styles.articleList, className)}
			>
				{articles.length === 0
					? <p>Статей нет</p>
					: articles.map((article) => (
					<ArticleLink
						key={article.id}
						articleId={article.articleId}
						text={article.title}
					/>
				))}
			</div>
		</DynamicModuleLoader>
	)
}
