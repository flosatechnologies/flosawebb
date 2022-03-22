import "./App.css";
import NavbarMenu from "./components/Navbar";

import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <div className="app">
      <NavbarMenu />

      <Services />
      <Projects />
=======
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import RouterComponent from "./components/Router";


function App() {
  return (
    <div className="App">

      <RouterComponent />


    </div>
  );
}

export default App;
