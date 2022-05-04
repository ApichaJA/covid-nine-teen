import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AssessSymptoms from "./pages/AssessSymptoms";
import "./pages/style.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Assess-Symptoms" element={<AssessSymptoms />} />
      </Routes>
    </div>
  );
}

export default App;
