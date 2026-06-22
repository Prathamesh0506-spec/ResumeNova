import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import WorkSpace from "./Components/WorkSpace.jsx";

import TempDisplayPage from "./Components/TempDisplayPage.jsx";
import GetPlsPage from "./Components/GetPlsPage.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
      
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit" element={<WorkSpace />}></Route>
          <Route path="/Templetes" element={<TempDisplayPage />}></Route>
          <Route path="/Get-plus" element={<GetPlsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}