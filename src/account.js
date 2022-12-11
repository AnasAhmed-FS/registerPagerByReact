import React, { useState } from "react";
import Regis from "./img/regis.jpg";
import { NavLink, useNavigate } from "react-router-dom";

export const Account = ({ reciveVal }) => {
  // By this line using to redirect to another page
  const navigate = useNavigate();

  // store all object in variables
  const [userRegis, setUserRigs] = useState({
    username: "",
    email: "",
    pass: "",
    confPass: "",
  });

  // Sellect each input vlaue to import  inside each object in setUserRigs()
  const reciveDataInput = (val) => {
    const { name, value } = val.target;
    setUserRigs({ ...userRegis, [name]: value });
  };

  // submit form and send data object to another component by parameter reciveVal
  const submitData = (e) => {
    e.preventDefault();
    userValid();
  };

  /*             From here start to validation inputs           */

  // Disable input button if there is field is empty
  const isDesabled = () => {
    return (
      userRegis.username.trim() === "" ||
      userRegis.email.trim() === "" ||
      userRegis.pass.trim() === "" ||
      userRegis.confPass.trim() === ""
    );
  };

  // Username validation
  const [usernameError, setUsernameError] = useState("");
  // Email Validation
  const [emailError, setEmailError] = useState("");
  // password Validation
  const [passError, setPassError] = useState("");
  // conform password Validation
  const [confPassError, setConfPassError] = useState("");

  // Regular expression to allow only chars without expresions(!@#$%%^&* andSoOn..)
  var specialChars = /[^a-zA-Z0-9 ]/g;

  //  Only chars in first and last input index without nums in first or last char
  const rexF_L = /^[a-z].*[a-z]$/gim;

  // validation email format
  const rexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // By this function, all action is working
  const userValid = () => {
    if (userRegis.username.length < 5 || userRegis.username.length > 15) {
      return setUsernameError(
        "characters length must more than 4 and less than 15"
      );
    }
    if (userRegis.username.match(specialChars)) {
      return setUsernameError("Only characters A-Z, a-z and 0-9 are allowed");
    }
    if (!userRegis.username.match(rexF_L)) {
      return setUsernameError(
        "First and Last character must be text no number. Or change username to another "
      );
    }
    if (!userRegis.email.match(rexEmail)) {
      return setEmailError("E.X username@examlpe.com");
    }
    if (userRegis.pass.length < 8) {
      return setPassError("length at least 8");
    }
    if (!userRegis.confPass.match(userRegis.pass)) {
      return setConfPassError(
        "Your confirm is not matching with your password "
      );
    } else {
      reciveVal(userRegis);
      navigate("/registerPagerByReact/list");
    }
  };
  return (
    <div className="my-28 ">
      {" "}
      <div className="    flex flex-col sm:flex-row justify-around    ">
        <img
          src={Regis}
          alt="Nothing appear"
          className=" mx-auto sm:mx-0 rounded-2xl w-96 h-full max-w-md "
        />
        <div className=" text-center mt-10 sm:mt-0">
          <h1 className="font-bold    ">Create Account</h1>
          <h4 className="font-extralight  pb-4">
            Go ahead an sign up, let everyone know how awesome you are!
          </h4>{" "}
          <form onSubmit={submitData} className="  ">
            <div className=" mb-3">
              <input
                type="text"
                className="  p-1 rounded-lg"
                name="username"
                value={userRegis.username}
                onChange={reciveDataInput}
                placeholder="Username"
              />
              <div className="pt-1  text-sm text-red-600  font-light mx-auto max-w-xs">
                {usernameError}
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="  p-1 rounded-lg"
                name="email"
                value={userRegis.email}
                onChange={reciveDataInput}
                placeholder="Email"
              />
              <div className="pt-1  text-sm text-red-600  font-light mx-auto max-w-xs">
                {emailError}
              </div>
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="  p-1 rounded-lg"
                name="pass"
                value={userRegis.pass}
                onChange={reciveDataInput}
                placeholder="Password"
              />
              <div className="pt-1  text-sm text-red-600  font-light mx-auto max-w-xs">
                {passError}
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="  p-1 rounded-lg text-black"
                name="confPass"
                value={userRegis.confPass}
                onChange={reciveDataInput}
                placeholder="Confirm password"
              />
              <div className="pt-1  text-sm text-red-600  font-light mx-auto max-w-xs">
                {confPassError}
              </div>
            </div>
            <button
              disabled={isDesabled()}
              className="bg-gradient-to-r from-blue-700 to-blue-400   p-2  w-64 text-slate-50 rounded-md"
            >
              Get Started
            </button>
          </form>
          {/* <NavLink to="/list">
            <button className=" mt-3  bg-gradient-to-r from-pink-600 to-blue-400   p-2  w-56 text-slate-50 rounded-md">
              Ckeck List
            </button>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};
