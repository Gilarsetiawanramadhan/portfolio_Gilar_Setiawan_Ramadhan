import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/home/Home';
import About from "./page/about/About";
import MinPro from "./page/minpro/Minpro";
import Skil from "./page/skills/Skil";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Minpro" element={<MinPro/>}/>
          <Route exact path="/Skill" element={<Skil/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
