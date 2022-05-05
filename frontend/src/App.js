import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AssessSymptoms from "./pages/AssessSymptoms";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AssessmentResults from "./pages/AssessmentResults";
import Recomand from "./pages/Recomand";
import Hospital from "./pages/Hospital";
import Medicine from "./pages/Medicine";

import "./pages/style.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Assess-Symptoms" element={<AssessSymptoms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/symptom-assessment-results" element={<AssessmentResults />} />
        <Route path="/recommand" element={<Recomand />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/medicine" element={<Medicine />} />
      </Routes>
    </div>
  );
}

export default App;
