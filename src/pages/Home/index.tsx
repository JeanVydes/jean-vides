import { Header } from '../../components/Header';
import { MainContent } from '../../components/MainContent';
import { About } from '../../components/About';
import { Projects } from '../../components/Projects';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export default function App() {
	return (
		<div className="bg-slate-900 text-gray-300 font-sans antialiased" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)', backgroundSize: '50px 50px' }}>
			<Header />
			<main className="px-8 md:px-16">
				<MainContent />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
