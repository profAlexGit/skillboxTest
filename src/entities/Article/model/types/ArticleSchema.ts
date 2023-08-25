export interface Article {
	id: string;
	title: string;
	text: string;
}

export interface ArticleSchema {
	data: Article | null;
	isLoading: boolean;
	error: string | null;
}
