

import "./App.css";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid={true} className="App">
      <NavbarMenu />
      <Footer />
    </Container>


  );
}

export default App;
