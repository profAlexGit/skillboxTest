import {DynamicModuleLoader, ReducersList} from "@app/providers/StoreProvider";
import {articleReducer} from "../../model/slice/ArticleSlice";
import {useEffect} from "react";
import {useAppDispatch} from "@shared/hooks/useAppDispatch";
import {fetchArticle} from "@entities/Article/model/service/fetchArticle";
import styles from './articleDetail.module.scss';
import {useSelector} from "react-redux";
import {getArticle, getArticleError, getArticleIsLoading} from "@entities/Article/model/selectors/articleSelectors";

interface ArticleDetailProps {
	id: string;
}

const initialReducers: ReducersList = {
	article: articleReducer
}

export const ArticleDetail = (props: ArticleDetailProps) => {
	const {id} = props;
	const dispatch = useAppDispatch();
	
	const article = useSelector(getArticle);
	const isLoading = useSelector(getArticleIsLoading);
	const error = useSelector(getArticleError);
	
	useEffect(() => {
		dispatch(fetchArticle(id))
	}, [id])
	
	const hasArticle = !isLoading && !error && article;
	
	return <DynamicModuleLoader reducers={initialReducers}>
		{isLoading && <span>LOADING...</span>}
		{error && <span>{error}</span>}
		{!!hasArticle && <div className={styles.articleDetail}>
			<h3>{article?.title}</h3>
			<p>{article?.text}</p>
		</div>}
	</DynamicModuleLoader>
}
