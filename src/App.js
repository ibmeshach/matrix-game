import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Sellers from "./Pages/DashBoard/Sellers/Sellers";
import { SellersSearch } from "./Pages/DashBoard/Sellers/SellersSearch/SellersSearch";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Navbar from "./components/Home/Navbar/Navbar";
import Sellers1 from "./Pages/DashBoard/sellers1/Sellers1";
import Sellers2 from "./Pages/DashBoard/Sellers2/Sellers2";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/sellers1" element={<Sellers1 />} />
          <Route path="/sellers2" element={<Sellers2 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sellers_search" element={<SellersSearch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
