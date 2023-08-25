import { configureStore, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';
import { type AnyAction, type DeepPartial } from 'redux';
import { $api } from '@shared/api/api';
import {authReducer} from "@entities/Auth";

export function createReduxStore (
	initialState?: StateSchema,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): EnhancedStore {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		auth: authReducer
	};
	
	const reducerManager = createReducerManager(rootReducer);
	
	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<StateSchema, AnyAction>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api
				}
			}
		}).concat()
	});
	
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	store.reducerManager = reducerManager;
	
	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

