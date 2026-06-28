import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import LoginSuccessModal from "./Components/LoginSuccessModal.jsx";
import Navbar from "./Components/Navbar.jsx";
import WorkSpace from "./Components/EditorialPage/WorkSpace.jsx";

import TempDisplayPage from "./Components/TempDisplayPage.jsx";
import GetPlsPage from "./Components/GetPlsPage.jsx";
import Login from "./Components/Login.jsx";
import { ResumeProvider } from "./Context/ResumeContext";

export default function App() {
  return (
    <>
      <ResumeProvider>
      <BrowserRouter>
      
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/edit" element={<WorkSpace />}></Route>
          <Route path="/Templetes" element={<TempDisplayPage />}></Route>
          <Route path="/Get-plus" element={<GetPlsPage />}></Route>
          <Route path="/Modal" element={<LoginSuccessModal />}></Route>


          LoginSuccessModal

        </Routes>
      </BrowserRouter>
      </ResumeProvider>
    </>
  );
}