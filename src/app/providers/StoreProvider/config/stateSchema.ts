import {AnyAction, CombinedState, ReducersMapObject} from "redux";
import {Reducer} from "react";
import {EnhancedStore} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {AuthSchema} from "@entities/Auth";
import {ArticleListSchema} from "@features/ArticlesList";
import {ArticleSchema} from "@entities/Article";
import {ProfileSchema} from "@entities/Profile";

export interface StateSchema {
	auth: AuthSchema,
	articlesList?: ArticleListSchema,
	article?: ArticleSchema,
	profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer<any, any>) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArguments {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T,
	extra: ThunkExtraArguments,
	state: StateSchema
}
