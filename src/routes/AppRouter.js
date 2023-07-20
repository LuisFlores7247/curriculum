import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import {About} from "../components/About"
import { Home } from "../components/Home";
import "../index.css"
import { Projects } from "../components/Projects";

export const AppRouter = () => {
    return <div>
        <Navbar></Navbar>
    <Routes>
        <Route path="/curriculum/" element={<Home></Home>}/>
        <Route path="/curriculum/about" element={<About></About>}/>
        <Route path="/curriculum/projects" element={<Projects></Projects>}/>
    </Routes>
    </div>
}