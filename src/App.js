import './App.css';
import NavbarMenu from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
     <NavbarMenu/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
