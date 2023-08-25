import {useParams} from "react-router";
import {ArticleDetail} from "@entities/Article";
import {Suspense} from "react";

export const ArticlePage = () => {
	const { id } = useParams();
	return <div>
		<Suspense fallback={'loading'}>
			<ArticleDetail id={id || ''} />
		</Suspense>
	</div>
}
