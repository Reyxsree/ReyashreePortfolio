import Home from './pages/home.js'
import About from './pages/about.js'
import Project from './pages/project.js'
import Design from './pages/design.js'
import Webdev from './pages/webdev.js'
import Experience from './pages/experience.js'
import Intern from './pages/intern.js'
import Club from './pages/club.js'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
<div>
<Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/design" element={<Design />} />
        <Route path="/webdev" element={<Webdev />} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/intern' element={<Intern/>}/>
        <Route path='/club' element={<Club/>}/>

      </Routes>
    </Router>
</div>
  );
}

export default App;
