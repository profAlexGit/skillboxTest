import {lazy} from "react";

export const profileAsyncCard = lazy(() => import('./ProfileCard')
	.then(module => ({default: module.ProfileCard})))
