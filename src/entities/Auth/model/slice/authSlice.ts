import {AuthData, AuthSchema} from "@entities/Auth/model/types/AuthSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login} from "@entities/Auth/model/service/authService";

const initialState: AuthSchema = {
	data: null,
	error: null,
	isLoading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<AuthData>) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
				state.isLoading = false;
				state.error = action.payload || 'unknown error';
				state.data = null;
			})
	}
})

export const {reducer: authReducer} = authSlice;
