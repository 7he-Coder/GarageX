import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Services from "./components/Services";
import About from "./components/About";
import Counter from "./components/Counter";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Hero />
			<div className="max-w-7xl mx-auto px-4">
				<CTA />
				<Services />
			</div>
			<About />
			<Counter />
			<Contact />
			<Testimonials />
			<Blog />
			<Pricing />
			<Projects />
			<Footer />
		</>
	);
};

export default App;
