import {StateSchema} from "@app/providers/StoreProvider";

export const getProfile = (state: StateSchema) => state.profile?.data || null;

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;

export const getProfileError = (state: StateSchema) => state.profile?.error || null;
