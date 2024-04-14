import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NonHeader from "../utils/layout/header/NonHeader";
import MemberHeader from "../utils/layout/header/MemberHeader";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MemberHeader />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;