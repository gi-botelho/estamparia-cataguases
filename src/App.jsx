import Header from './components/Header';
import Hero from './components/Hero';
import NossosMundos from './components/NossosMundos';
import Diferenciais from './components/Diferenciais';
import InfoZone from './components/InfoZone';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-light">
      <Header />
      <main>
        <Hero />
        <NossosMundos />
        <Diferenciais />
        <InfoZone />
      </main>
      <Footer />
    </div>
  );
}

export default App;
