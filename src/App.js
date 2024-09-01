
import './App.css';

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Accordian from "./Components/Accordian";
import Home from "./Components/Home";
import Scramble from "./Components/Scramble";
import Slider from "./Components/Slider";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/accordian"
          element={<Accordian />}
        />
        <Route
          path="/slider"
          element={<Slider />}
        />
        <Route
          path="/scramble"
          element={<Scramble />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
