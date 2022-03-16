import './App.css';
import About from './comp/About/About';
import Developer from './comp/developer/Developer';
import Footer from './comp/Footer/Footer';
import { Hero } from './comp/Hero/Hero';
import Navbar from './comp/Navbar/Navbar';
import { Subscribe } from './comp/subscribe/Subscribe';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Developer/>
        <Subscribe/>
        <Footer/>
    </div>
  );
}

export default App;
