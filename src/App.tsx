import Home from './pages/Home';
import Addition from './pages/Addition';
import Symbols from './pages/Symbols';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addition" element={<Addition />} />
        <Route path="/symbols" element={<Symbols />} />
      </Routes>
    </Router>
  )
}

export default App