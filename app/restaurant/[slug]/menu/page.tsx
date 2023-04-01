import React from "react";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

export default function RestaurantMenu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow mb-3">
        <RestaurantNavBar />
        <Menu />
      </div>
    </>
  );
}
