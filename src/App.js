import "./App.css";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Hero from "./pages/Hero";

function App() {
  return (
    <Container fluid={true} className="App">
      <NavbarMenu />
      <Hero />
      <Footer />
    </Container>
  );
}

export default App;
