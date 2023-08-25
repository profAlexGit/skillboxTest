import styles from './header.module.scss'
import {memo} from "react";
import {ProfileAvatar} from "@entities/Profile";
import {Logo} from "@shared/ui/Logo/Logo";

export const Header = memo(() => {
	return <header className={styles.header}>
		<Logo />
		
		<ProfileAvatar />
	</header>
})
