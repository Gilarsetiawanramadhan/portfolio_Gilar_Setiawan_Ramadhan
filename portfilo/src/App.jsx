import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/home/Home';
import About from "./page/about/About";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/About" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
