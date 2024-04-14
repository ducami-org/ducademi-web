import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NonHeader from "../utils/layout/header/NonHeader";
import MemberHeader from "../utils/layout/header/MemberHeader";
import DucamiHeader from "../utils/layout/header/DucamiHeader";
import AdminHeader from "../utils/layout/header/AdminHeader";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DucamiHeader />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;