import {createRoot} from 'react-dom/client';
import {App} from "@app/app";
import {StoreProvider} from "@app/providers/StoreProvider";

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
	<StoreProvider>
		<App />
	</StoreProvider>
)

