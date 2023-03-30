import Header from "./components/Header";
import SideBar from "./components/SideBar";
import RestaurantCard from "./components/RestaurantCard";

export default function Search() {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBar />
        <div className="w-5/6 pl-5 pr-5">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
