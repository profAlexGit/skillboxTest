import {createAsyncThunk} from "@reduxjs/toolkit";
import {Profile} from "../types/profileSchema";
import {ThunkConfig} from "@app/providers/StoreProvider";

export const fetchProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/fetchProfile',
	async (_, ThunkApi) => {
		const {
			extra,
			rejectWithValue
		} = ThunkApi;
		
		try {
			const response = await extra.api.get('/profile');
			
			if (!response.data) {
				throw new Error();
			}
			
			return response.data;
		} catch (e) {
			return rejectWithValue('Не удалось загрузить профиль');
		}
	}
)
