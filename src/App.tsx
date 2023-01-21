import Home from './pages/Home';
import SingleProblemType from './pages/SingleProblemType';
import Symbols from './pages/Symbols';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addition" element={<SingleProblemType problemType='addition' />} />
        <Route path="/subtraction" element={<SingleProblemType problemType='subtraction' />} />
        <Route path="/multiplication" element={<SingleProblemType problemType='multiplication' />} />
        <Route path="/division" element={<SingleProblemType problemType='division' />} />
        <Route path="/symbols" element={<Symbols />} />
      </Routes>
    </HashRouter>
  )
}

export default App