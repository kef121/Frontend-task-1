import React from "react";
import './App.css';
import Footer from "./components/Footer";
import Links from "./components/Links";
import Profile from "./components/Profile";


function App() {
  return (
    <div className="App">
        <Profile />
        <Links />
        <Footer />
    </div>
  );
}

export default App;
