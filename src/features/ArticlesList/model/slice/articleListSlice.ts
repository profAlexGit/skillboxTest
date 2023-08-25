import {ArticleListSchema} from "@features/ArticlesList/model/types/ArticleListSchema";
import {createSlice} from "@reduxjs/toolkit";
import {fetchArticlesList} from "@features/ArticlesList/model/service/fetchArticlesList";

const initialState: ArticleListSchema = {
	articles: [],
	error: null,
	isLoading: false,
}

export const articlesListSlice = createSlice({
	name: 'articlesList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.articles = action.payload;
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || '';
				state.articles = [];
			})
	}
})

export const {reducer: articlesListReducer} = articlesListSlice;
