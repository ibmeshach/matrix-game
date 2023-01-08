import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Home/Footer/Footer";
import Navbar from "./components/Home/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
  const [expanded, setExpanded] = useState(!false);

  const expandState = (state) => {
    setExpanded(state);
  };

  return (
    <>
      {expanded ? (
        <>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home expandState={expandState} />} />
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
