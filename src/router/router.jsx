import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NonHeader from "../components/layout/header/NonHeader";
import MemberHeader from "../components/layout/header/MemberHeader";
import DucamiHeader from "../components/layout/header/DucamiHeader";
import AdminHeader from "../components/layout/header/AdminHeader";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemberHeader />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
