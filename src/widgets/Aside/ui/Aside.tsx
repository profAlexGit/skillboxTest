import styles from './aside.module.scss';
import cn from 'classnames';
import {ArticleList} from "@features/ArticlesList/ui/ArticleList";

interface AsideProps {
	className?: string;
}

export const Aside = (props: AsideProps) => {
	const {
		className
	} = props;
	
	return (
		<div
			className={cn(styles.aside, className)}
		>
			<ArticleList />
		</div>
	)
}
