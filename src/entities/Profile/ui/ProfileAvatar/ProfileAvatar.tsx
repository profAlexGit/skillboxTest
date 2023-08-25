import styles from './profileAvatar.module.scss';
import cn from 'classnames';
import {useState} from "react";
import {ProfileModal} from "@entities/Profile/ui/ProfileModal/ProfileModal";

enum Size {
	S = 's',
	M = 'm',
	L = 'l'
}
interface ProfileAvatarProps {
	className?: string;
	size?: Size
}

export const ProfileAvatar = (props: ProfileAvatarProps) => {
	const {
		className,
		size= Size.M
	} = props;
	
	const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false);
	
	const onOpenModal = () => {
		setIsOpenProfileModal(true);
	}
	
	const onCloseModal = () => {
		setIsOpenProfileModal(false);
	}
	
	return (
		<div
			className={cn(styles.profileAvatar, className)}
			onClick={onOpenModal}
		>
			<img
				className={cn(styles.avatarImg, styles[size])}
				src="https://avatarko.ru/img/kartinka/5/kot_multfilm_4689.jpg"
				alt="avatar"
			/>
			
			<ProfileModal
				isOpen={isOpenProfileModal}
				onClose={onCloseModal}
			/>
		</div>
	)
}
