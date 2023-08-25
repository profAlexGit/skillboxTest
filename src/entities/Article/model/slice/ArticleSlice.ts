import {ArticleSchema} from "../types/ArticleSchema";
import {createSlice} from "@reduxjs/toolkit";
import {fetchArticle} from "@entities/Article/model/service/fetchArticle";

const initialState: ArticleSchema = {
	data: null,
	error: null,
	isLoading: false
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticle.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchArticle.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchArticle.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || '';
			})
	}
})

export const {reducer: articleReducer} = articleSlice;
