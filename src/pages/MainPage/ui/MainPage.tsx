import {Outlet} from "react-router";
import {Header} from "@widgets/Header/ui/Header";
import {Aside} from "@widgets/Aside";
import styles from './mainPage.module.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAuthData, getAuthError, getAuthIsLoading} from "@entities/Auth";
import {login} from "@entities/Auth/model/service/authService";
import {useAppDispatch} from "@shared/hooks/useAppDispatch";

export const MainPage = () => {
	const isLoading = useSelector(getAuthIsLoading);
	const authError = useSelector(getAuthError);
	const authData = useSelector(getAuthData);
	
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		dispatch(login())
	}, [])
	
	if (isLoading) {
		return <div>
			loading...
		</div>
	}
	
	if (authError) {
		return <div>
			ERROR
		</div>
	}
	
	return <div className={styles.mainPage}>
		<Header />
		<div className={styles.contentWrapper}>
			<Aside />
			<Outlet />
		</div>
	</div>
}
