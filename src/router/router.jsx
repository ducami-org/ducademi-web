import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NonHeader from "../utils/layout/header/NonHeader";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NonHeader />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;