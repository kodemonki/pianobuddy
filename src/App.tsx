import "./App.css";
import {Route, HashRouter as Router, Routes} from "react-router-dom"
import Home from "./pages/Home";
import ScaleFinder from "./pages/ScaleFinder";
import ChordFinder from "./pages/ChordFinder";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/scale" Component={ScaleFinder} />
          <Route path="/chord" Component={ChordFinder} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>

   
  );
};

export default App;
