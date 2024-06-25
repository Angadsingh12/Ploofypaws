import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-5 relative">
      <Link to="/" className="absolute top-0 left-0 flex items-center ml-5 mt-5">
        <img src={logo} alt="Logo" className="w-[169px] h-[112px]" />
        <h2 className="font-gloria text-xl -ml-9">PloofyPaws</h2>
      </Link>

      <div className="fixed top-0 right-0 mt-5 mr-5 z-50">
        <button className="flex justify-center items-center rounded-md gap-3 w-[10vw] md:w-[194px] h-[56px] btn">
          <FontAwesomeIcon icon={faUser} /> Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
