import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import CreateTheme from "./Components/CreateTheme";

export default function App() {

  return (
    <Layout>
      <Navigation />
			<CreateTheme />
      <Home />
      <About />
      <Projects />
      <Footer />
    </Layout>
  );
}
