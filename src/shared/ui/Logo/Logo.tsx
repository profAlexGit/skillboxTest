import styles from './logo.module.scss';
import cn from 'classnames';

interface LogoProps {
	className?: string;
}

export const Logo = (props: LogoProps) => {
	const {
		className
	} = props;
	
	return (
		<img
			className={cn(styles.logo, className)}
			src="https://png.pngtree.com/template/20190626/ourlarge/pngtree-infinity-logo-designvectorillustration-image_217231.jpg"
			alt="логотип"
		/>
	)
}
