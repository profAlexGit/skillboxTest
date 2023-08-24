import {createRoot} from 'react-dom/client';
import {App} from "@app/app";

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(<App />)

