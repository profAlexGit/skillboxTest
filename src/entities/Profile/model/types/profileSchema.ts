export interface Profile {
	id: string,
	firstname: string,
	lastname: string,
	username: string,
	age: number
}

export interface ProfileSchema {
	data: Profile | null;
	isLoading: boolean;
	error: string | null;
}
