import {StateSchema} from "@app/providers/StoreProvider";

export const getArticlesList = (state: StateSchema) => state.articlesList?.articles || [];

export const getArticlesListIsLoading = (state: StateSchema) => state.articlesList?.isLoading;

export const getArticlesListError = (state: StateSchema) => state.articlesList?.error;
