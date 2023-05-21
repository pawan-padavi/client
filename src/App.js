import "./App.css";
import { Dashboard } from "./Component/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Resume } from "./Component/Resume";
import { Home } from "./Component/Home";
import { Websites } from "./Component/Websites";
import { ContactUs } from "./Component/ContactUs";
import { AboutUs } from "./Component/AboutUs";

function App() {
  return (
    <Dashboard>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs></AboutUs>} />
        <Route path="/Websites" element={<Websites/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Dashboard>
  );
}

export default App;
