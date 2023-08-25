import {Modal} from "@shared/ui/Modal/Modal";
import {profileAsyncCard as ProfileCard} from "../ProfileCard/ProfileCard.async";
import {Suspense} from "react";

interface ProfileModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const ProfileModal = (props: ProfileModalProps) => {
	const {
		className,
		isOpen,
		onClose
	} = props;
	
	return <Modal
		isOpen={isOpen}
		onClose={onClose}
		className={className}
	>
		<Suspense fallback={'loading'}>
			{isOpen && <ProfileCard />}
		</Suspense>
	</Modal>
}
