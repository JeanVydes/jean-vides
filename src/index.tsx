import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from './pages/Home/index.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Route default component={Index} />
			</main>
			<SpeedInsights />
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
