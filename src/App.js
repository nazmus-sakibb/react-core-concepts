import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ParticlesContainer from './components/ParticlesContainer/ParticlesContainer';

function App() {
  return (
    <div>
      <ParticlesContainer/>
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
