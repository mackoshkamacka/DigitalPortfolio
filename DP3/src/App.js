import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";   <-- Comment or delete
// import Contact from "./pages/Contact";  <-- Comment or delete
// import Projects from "./pages/Projects";  <-- Comment or delete

function App() {
  return (
    <Router> 
      <div className="p-4">
        <nav className="mb-4">
          {/*<a href="/" className="mr-4 text-blue-500">Home</a>*/}
          {/* Remove Projects link */}
          {/* <a href="/projects" className="mr-4 text-blue-500">Projects</a> */}
          {/* Remove About link */}
          {/* <a href="/about" className="mr-4 text-blue-500">About</a> */}
          {/* Remove Contact link */}
          {/* <a href="/contact" className="text-blue-500">Contact</a> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Remove other routes */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
