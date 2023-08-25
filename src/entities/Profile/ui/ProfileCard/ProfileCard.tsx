import {DynamicModuleLoader, ReducersList} from "@app/providers/StoreProvider";
import {profileReducer} from "../../model/slice/profileSlice";
import {useAppDispatch} from "@shared/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getProfile, getProfileError, getProfileIsLoading} from "@entities/Profile/model/selectors/profileSelectors";
import {useEffect} from "react";
import {fetchProfile} from "@entities/Profile/model/service/fetchProfile";
import styles from './profileCard.module.scss';

const initialReducer: ReducersList = {
	profile: profileReducer
}

export const ProfileCard = () => {
	const dispatch = useAppDispatch();
	const profile = useSelector(getProfile);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	
	useEffect(() => {
		dispatch(fetchProfile())
	}, [dispatch])

	if (isLoading) {
		return <span>LOADING</span>
	}
	
	if (error) {
		return <span>ERROR</span>
	}
	
	return (
		<DynamicModuleLoader reducers={initialReducer}>
			<div className={styles.profileCard}>
				<div className={styles.profileField}>
					<span>Имя: </span>
					<span>{profile?.firstname}</span>
				</div>
				
				<div className={styles.profileField}>
					<span>Фамилия: </span>
					<span>{profile?.lastname}</span>
				</div>
				
				<div className={styles.profileField}>
					<span>username: </span>
					<span>{profile?.username}</span>
				</div>
				
				<div className={styles.profileField}>
					<span>Возраст: </span>
					<span>{profile?.age}</span>
				</div>
			</div>
		</DynamicModuleLoader>
	)
	
}
