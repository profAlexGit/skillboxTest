import {RouterProvider} from "react-router";
import {router} from "../routeConfig";
import {Suspense} from "react";

export const AppRouter = () => {
	return (
		<Suspense fallback='loading'>
			<RouterProvider router={router}/>
		</Suspense>
	)
}
