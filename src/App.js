import React from "react";
import "./App.css";


import Dashboard from "./components/pages/Dashboard";
import Navbar from "./components/header/Navbar";

import {
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";

function App() {
  return (
  
      <div className="App">
        <>
        {/* <Route> */}
        <Navbar />
        <Dashboard />
        {/* </Route> */}
  </>
      </div>
  );
}

export default App;
