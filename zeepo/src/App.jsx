import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import Learn from './components/learn/learn.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
    </Routes>
  );
}

export default App;