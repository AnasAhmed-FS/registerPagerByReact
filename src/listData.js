import React from "react";
import Sucess from "./img/sucess.jpg";

export default function ListData({ ckeckVal, ckeckUsername, Username }) {
  //   console.log("The list: ", ckeckValList);
  console.log(ckeckVal.username);
  return (
    <div className="my-28">
      <div className="    flex flex-col sm:flex-row justify-around     ">
        <img
          src={Sucess}
          alt="Nothing appear"
          className=" mx-auto sm:mx-0 rounded-2xl w-96 h-full  "
        />
        <div className=" text-center mt-10 sm:mt-0">
          <h1 className="font-bold    ">Successfully Logged In</h1>
          <h3 className="font-extralight  mt-5 pb-4">
            {" "}
            Hello{" "}
            <span className="uppercase font-medium">
              {/* To print out username reult by twise steps 
                    First One --> using {Username}
                    Second One --> using  {ckeckVal[ckeckVal.length - 1].username}
                */}
              {Username}
            </span>
          </h3>
          <h4 className="font-extralight underline pb-4">
            {ckeckVal[ckeckVal.length - 1].email}
          </h4>{" "}
          {/* To print all users was inserting in list using lines below:-  */}
          {/*  <ul>
        {ckeckVal.map((e, index) => (
      <li key={index}>  <div> Hello {e.username}</div>
            {/* <div>{e.email}</div> <div>{e.pass}</div>{" "}
            <div>{e.confPass}</div>{" "}  
        </li>
      </ul> */}
        </div>
      </div>
    </div>
  );
}
