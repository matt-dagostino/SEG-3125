import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Divider from './components/Divider/Divider';
import Services from './components/Services/Services';
import Barbers from './components/Barbers/Barbers';

function App() {
  return (
    <div style={{ backgroundColor: '#EFEFEF'}}>
      <Hero />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Barbers />
    </div>
  );
}

export default App;
