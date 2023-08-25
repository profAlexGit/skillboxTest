import {createAsyncThunk} from "@reduxjs/toolkit";
import {Article} from "../types/ArticleSchema";
import {ThunkConfig} from "@app/providers/StoreProvider";

export const fetchArticle = createAsyncThunk<Article, string, ThunkConfig<string>>(
	'article/fetchArticle',
	async (articleId, ThunkApi) => {
		const {
			rejectWithValue,
			extra
		} = ThunkApi;
		
		if (!articleId) {
			return rejectWithValue('Нужен id статьи')
		}
		
		try {
			const response = await extra.api.get(`/article/${articleId}`);
			
			if (!response.data) {
				throw new Error();
			}
			
			return response.data;
		} catch (e) {
			return rejectWithValue('Не удалось загрузить статью')
		}
	}
)
