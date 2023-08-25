import {StateSchema} from "@app/providers/StoreProvider";

export const getAuthData = (state: StateSchema) => state.auth.data;

export const getAuthIsLoading = (state: StateSchema) => state.auth.isLoading;

export const getAuthError = (state: StateSchema) => state.auth.error;
