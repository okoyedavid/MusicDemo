import { NavLink } from "react-router-dom";
import penguin from "../assets/penguin.jpeg";

function Navbar() {
  return (
    <header className="mb-4">
      <nav className="flex items-center justify-between">
        <div>
          <img className="h-10 mr-2 rounded-full" src={penguin} alt="" />{" "}
        </div>
        <ul className="flex items-center sm:grow justify-between ">
          <NavLink className="font-bold px-2"> Playlist </NavLink>
          <NavLink className="font-bold px-2"> Artists</NavLink>
          <NavLink className="font-bold hidden sm:block"> Hello Emeka </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
