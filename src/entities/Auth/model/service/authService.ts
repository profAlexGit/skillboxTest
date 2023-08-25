import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthData} from "@entities/Auth/model/types/AuthSchema";
import {ThunkConfig} from "@app/providers/StoreProvider";

export const login = createAsyncThunk<AuthData, void, ThunkConfig<string>>(
	'auth/login',
	async (_, ThunkApi) => {
		const {
			extra,
			rejectWithValue
		} = ThunkApi;
		
		try {
			const response = await extra.api.get('/login');
			
			if (!response.data) {
				throw new Error();
			}
			
			return response.data;
		} catch (e) {
			return rejectWithValue('Авторизация не удалась')
		}
	}
)
