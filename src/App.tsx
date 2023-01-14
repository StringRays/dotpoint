import Home from './pages/Home';
import Addition from './pages/Addition';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addition" element={<Addition />} />
      </Routes>
    </Router>
  )
}

export default App