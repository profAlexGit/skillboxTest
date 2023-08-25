import {authReducer} from './model/slice/authSlice';
import {type AuthSchema} from './model/types/AuthSchema';
import {
	getAuthData,
	getAuthError,
	getAuthIsLoading
} from './model/selectors/authSelectors';

export {
	authReducer,
	AuthSchema,
	getAuthData,
	getAuthError,
	getAuthIsLoading
}
