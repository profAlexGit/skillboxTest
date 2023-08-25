import {ProfileSchema} from "@entities/Profile/model/types/profileSchema";
import {createSlice} from "@reduxjs/toolkit";
import {fetchProfile} from "@entities/Profile/model/service/fetchProfile";

const initialState: ProfileSchema = {
	data: null,
	error: null,
	isLoading: false
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfile.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.data = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchProfile.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || '';
			})
	}
})

export const {reducer: profileReducer} = profileSlice;
