import "../src/index.css";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Service from "./components/Service";
import Login from "./components/Login";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <LandingPage/> */}
      {/* <Service/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
