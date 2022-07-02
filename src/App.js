import "./App.css";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import RouterComponent from "./components/Router";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
    <Helmet>
    <title>FLOSA Technologies</title>
    <meta name="description" content="Digital Solutions Hub" />
    <meta
      name="keywords"
      content="software, developemnt, mobile,  apps, website, design, code, programming, FLOSA, Technologies"
    />
  </Helmet>
      <RouterComponent />
    </div>
  );
}

export default App;
