import {StateSchema} from "@app/providers/StoreProvider";

export const getArticle = (state: StateSchema) => state.article?.data;

export const getArticleIsLoading = (state: StateSchema) => state.article?.isLoading;

export const getArticleError = (state: StateSchema) => state.article?.error;
