import React, { useEffect, useState } from "react";
import MainDash from "../../components/Dashboard/MainDash/MainDash";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import RightSide from "../../components/Dashboard/RigtSide/RightSide";
import Sidebar from "../../components/Dashboard/Sidebar";
import { supabase } from "../../config/supabaseClient";

import "./Dashboard.css";
import Sellers from "./Sellers/Sellers";
import Sellers1 from "./sellers1/Sellers1";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(!false);

  const [dashboard, setDashBoard] = useState(false);
  const [sellers, setSellers] = useState(false);

  console.log("lllll");
  console.log(dashboard);
  console.log(sellers);
  const expandState = (state) => {
    setExpanded(state);
  };

  const sideState = (dashboard, sellers) => {
    setDashBoard(dashboard);
    setSellers(sellers);
  };

  const updateUser = async () => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      console.log(user);

      if (error) {
        throw error;
      }
      if (user) {
        const { data, error } = await supabase
          .from("user_info")
          .update({ uid: user.id })
          .eq("email", user.email)
          .select()
          .single();

        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div className="App bg-[#170727]">
      <div className="AppHead">
        <Navbar expandState={expandState} />
      </div>

      <div className={dashboard ? "AppGlass bg-[#170727]" : "AppGlass1"}>
        <Sidebar sideState={sideState} expandState={expanded} />
        {dashboard && <MainDash />}
        {dashboard && <RightSide />}

        {sellers && <Sellers />}
      </div>
    </div>
  );
};

export default Dashboard;
