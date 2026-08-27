import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Employees from "../pages/Employees";
import Layout from "../components/layout/Layout";

export default function App() {
return (
    <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Dashboard />} />
    </Routes>
);
}