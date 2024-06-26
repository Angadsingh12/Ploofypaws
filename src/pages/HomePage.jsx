import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/fonts.css";

import pet1 from "../assets/pet1.png";
import ellipse2 from "../assets/Ellipse2.png";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Fragment>
      <section className="container flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-medium font-brigast">
            COMING SOON
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            Delighting pet owners with stylish and comfortable accessories for
            their furry friends.
          </p>
          <button
            className="btn w-40 md:w-72 py-3 md:py-5 rounded-full text-lg md:text-xl mt-8 shadow-md shadow-gray-600"
            onClick={handleButtonClick}
          >
            Get Notified
          </button>
        </div>
      </section>
      <p className="flex items-center gap-2 absolute left-5 bottom-5 font-semibold z-10">
        <FontAwesomeIcon icon={faEnvelope} />
        ploofypaws@gmail.com
      </p>

      <img src={ellipse2} alt="" className="absolute bottom-0 left-0 w-40 md:w-96" />

      <img src={pet1} alt="" className="absolute bottom-0 right-0 w-40 md:w-80 lg:w-96" />

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div
            className="p-8 rounded-lg shadow-lg text-white"
            style={{
              backgroundColor: "#E9AB0B",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">Get Notified!</h2>
            <p className="mb-4">
              Enter your email below to get notified when we launch.
            </p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded mb-4 text-black"
            />
            <button className="btn w-full py-2 rounded-full bg-white text-black font-semibold">
              Submit
            </button>
            <button
              className="btn w-full py-2 rounded-full bg-red-500 text-white font-semibold mt-4"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

  export default HomePage;
