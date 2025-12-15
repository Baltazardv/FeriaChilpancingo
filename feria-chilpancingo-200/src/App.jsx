import Hero from './components/Hero';
import PosterSection from './components/PosterSection';
import ElementsGrid from './components/ElementsGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <PosterSection />
      <ElementsGrid />
      <Footer />
    </div>
  );
}

export default App;
