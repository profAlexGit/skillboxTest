import styles from './articleLink.module.scss';
import cn from 'classnames';
import {LinkProps, NavLink} from "react-router-dom";

interface ArticleLinkProps {
	className?: string;
	articleId: string;
	text: string;
}

export const ArticleLink = (props: ArticleLinkProps) => {
	const {
		className,
		articleId,
		text
	} = props;
	
	return (
		<NavLink
			className={({isActive}) => cn(styles.articleLink, className, {[styles.active]: isActive})}
			to={`/article/${articleId}`}
		>
			{text}
		</NavLink>

	)
}
