import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-5">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="w-[169px] h-[112px]" />
        <h2 className="font-gloria text-xl -ml-9">PloofyPaws</h2>
      </Link>

      <button className="flex justify-center items-center rounded-md gap-3 w-[194px] h-[56px] btn">
        <FontAwesomeIcon icon={faUser} /> Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
