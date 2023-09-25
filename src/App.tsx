import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import PopUp from "./Signup/popUp";
import SignUp from "./Signup/signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/popUp" element={<PopUp />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>

  );
}