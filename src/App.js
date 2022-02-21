import "./App.css";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Projects from "./pages/Projects";

function App() {
  return (
    <Container fluid={true} className="App">
      <NavbarMenu />
      <Projects />
      <Footer />
    </Container>
  );
}

export default App;
