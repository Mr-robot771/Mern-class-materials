import SideBar from "../component/SideBar";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
