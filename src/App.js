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
    </div>
  );
}

export default App;
