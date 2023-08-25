import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArticleListItem} from "@features/ArticlesList/model/types/ArticleListSchema";
import {ThunkConfig} from "@app/providers/StoreProvider";

export const fetchArticlesList = createAsyncThunk<ArticleListItem[], void, ThunkConfig<string>>(
	'articlesList/fetchArticlesList',
	async (_, ThunkApi) => {
		const {
			extra,
			rejectWithValue
		} = ThunkApi;
		
		try {
			const response = await extra.api.get('/articlesList/');
			
			if (!response.data) {
				throw new Error();
			}
			
			return response.data;
		} catch (e) {
			return rejectWithValue('Не удалось загрузить список статей');
		}
	}
)
