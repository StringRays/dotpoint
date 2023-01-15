import Home from './pages/Home';
import Addition from './pages/Addition';
import Symbols from './pages/Symbols';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addition" element={<Addition />} />
        <Route path="/symbols" element={<Symbols />} />
      </Routes>
    </HashRouter>
  )
}

export default App