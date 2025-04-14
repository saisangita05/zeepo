import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import LearnSection from './components/learn/learn1.jsx';
import Dashboard from './components/dashboard.jsx';
import AboutUs from './components/aboutus.jsx';
import FAQ from './components/faq.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<LearnSection />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default App;