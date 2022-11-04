
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";




function App() {
  return (
    //
    // <Contact />
    <div className="App">
       
        <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
