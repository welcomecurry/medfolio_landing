import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Builder from "../src/pages/Builder/Builder"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <div style={{ paddingBottom: "60px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/builder" element={<Builder />} />
              </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
