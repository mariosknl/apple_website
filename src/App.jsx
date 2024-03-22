import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";

const App = () => {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />
			<Highlights />
			<Model />
		</main>
	);
};

export default Sentry.withProfiler(App);
