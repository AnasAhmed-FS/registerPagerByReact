import React from "react";
import Regis from "./img/regis.jpg";
import { NavLink } from "react-router-dom";
function Welcome() {
  return (
    <div className=" ">
      <div className="flex flex-col  justify-around    sm:flex-row    mb-5 mt-6 sm:mt-28  ">
        <img
          src={Regis}
          alt="Nothing appear"
          className="  sm:mx-0   w-96 h-full mx-auto rounded-2xl "
        />
        <div className="  text-center">
          <h1 className="font-bold uppercase p-5">Welcome</h1>
          <h4 className="font-extralight pb-4">
            We are glad you are here sgin up to start
          </h4>
          <NavLink to="/account">
            {" "}
            <button className="  bg-gradient-to-r from-blue-700 to-blue-400   p-2  w-56 text-slate-50 rounded-md">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
