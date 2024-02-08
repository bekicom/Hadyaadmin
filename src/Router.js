import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./page/Admin/Admin";
import Afitsant from "./page/Afitsant/Afitsant";
import Sitebar from "./components/Sitebar/Sitebar";
import Addproduct from "./page/Addproduct/Addproduct";
import Order from "./page/Order/Order";
import Room from "./page/Room/Room";

export default function App() {
  return (
    <div className="main">
      <Sitebar />

      <div className="routes">
        <Routes>
          <Route path="/" element={<Afitsant />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/order" element={<Order />} />
          <Route path="/addproduct" element={<Addproduct />} />

          <Route path="/room" element={<Room />} />
        </Routes>
      </div>
    </div>
  );
}
