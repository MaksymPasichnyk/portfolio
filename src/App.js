import React from "react";
import Navigation from "./Components/Navigation";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import {Routes, Route} from "react-router-dom"

export default function App() {
  return (
		<Layout>
			<Navigation />
			<Home />
			<About />
			<Projects />
			<Footer />
		</Layout>
	);
}
