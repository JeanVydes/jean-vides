import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import Index from './pages/Home/index.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Route default component={Index} />
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
