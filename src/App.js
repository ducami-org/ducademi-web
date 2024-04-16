import Main from "./pages/Main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
