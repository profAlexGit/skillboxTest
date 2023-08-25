export interface AuthData {
	id: string;
	userId: string;
	username: string;
}

export interface AuthSchema {
	data: AuthData | null,
	isLoading: boolean;
	error: string | null;
}
