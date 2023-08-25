export interface ArticleListItem {
	id: string;
	title: string;
	articleId: string;
}

export interface ArticleListSchema {
	articles: ArticleListItem[],
	isLoading: boolean;
	error: string | null;
}
