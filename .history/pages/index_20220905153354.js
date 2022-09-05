import {
  query,
  collection,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import About from "../components/About/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services";
import Team from "../components/Team";
import Token from "../components/Token";
import { db } from "../config/firebaseConfig";
export default function Home(props) {
  return (
    <>
      <Header />

      <HomePage />
      {/* <Blog /> */}
      <About />
      <Portfolio />
      <Services />
      {/* <Token /> */}
      <Counter />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
