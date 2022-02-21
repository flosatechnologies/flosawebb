import "./App.css";
import NavbarMenu from "./components/Navbar";
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
