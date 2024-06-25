import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-5">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] lg:w-[169px] lg:h-[112px]"
        />
        <h2 className="font-gloria text-lg sm:text-xl lg:text-2xl -ml-5 sm:-ml-7 lg:-ml-9">
          PloofyPaws
        </h2>
      </Link>

      <button className="flex justify-center items-center rounded-md gap-3 w-[150px] h-[48px] sm:w-[170px] sm:h-[52px] lg:w-[194px] lg:h-[56px] btn">
        <FontAwesomeIcon icon={faUser} />
        <span className="hidden sm:block">Sign Up</span>
      </button>
    </nav>
  );
};

export default Navbar;
