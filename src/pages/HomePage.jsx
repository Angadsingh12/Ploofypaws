import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/fonts.css";

import pet1 from "../assets/pet1.png";
import ellipse1 from "../assets/Ellipse 1.png";
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
      <section className="container md:flex items-center h-[60vh] relative z-10">
        <div className="w-1/2">
          <h1 className="md:text-[5rem] font-medium font-brigast">
            COMING SOON!
          </h1>
          <p className="text-xl font-medium">
            Delighting pet owners with stylish and comfortable accessories for
            their furry friends.
          </p>
          <button
            className="btn md:w-[300px] py-5 rounded-full text-xl mt-8 ml-[10rem] shadow-md shadow-gray-600"
            onClick={handleButtonClick}
          >
            Get Notified
          </button>
        </div>

        <div className="w-1/2">
          <img
            src={pet1}
            alt=""
            className="w-[10rem] md:w-[30rem] absolute -top-[3.5rem] right-0"
          />
        </div>
      </section>
      <p className="flex items-center gap-2 absolute left-[5%] bottom-[4%] font-semibold z-10">
        <FontAwesomeIcon icon={faEnvelope} />
        ploofypaws@gmail.com
      </p>

      <img
        src={ellipse1}
        alt=""
        className="absolute md:-top-[5rem] md:right-0"
      />
      <img
        src={ellipse2}
        alt=""
        className="absolute md:top-[18.7rem] md:w-[24rem]"
      />

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
              Enter your email below to be notified when we launch.
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
