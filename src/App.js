import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import EditPage from "./Components/EditPage";
import ViewTable from "./Components/ViewTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/view" element={<ViewTable />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
