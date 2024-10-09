import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

function AppLayout() {
  return (
    <div className="bg-bluish flex flex-col py-4 px-4 h-screen text-gray-100">
      <Navbar />

      <Outlet />

      <footer className="mt-auto text-center">
        <p className="font-semibold text-xs">
          &copy; Copyright {new Date().getFullYear()} by Music Inc
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;
