import React from "react";
import HeaderTop from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Records from "../components/Records";

const page = () => {
	return (
		<div>
			<HeaderTop />
			<Navbar />
			<Hero />
			<HowItWorks />
			<Records />
		</div>
	);
};

export default page;
