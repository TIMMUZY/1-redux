import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, Courses, About, Team, Blog, Contact } from "./pages/index.js";
import Image from "./pages/Courses/Image.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<NavBar />} path="/">
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
            <Route path="/image/:id" element={<Image />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </Router>
  );    
};

export default App;
