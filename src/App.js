import "./App.css";
import Welcome from "./welcome";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Account } from "./account";
import { useEffect, useState } from "react";
import ListData from "./listData";
function App() {
  const navigate = useNavigate();

  // In this line recive all data is coming from account Component (input form )
  const [valList, setValList] = useState([]);
  // Recive data from prop to put is inside useState
  const reciveValFun = (val) => {
    setValList([...valList, val]);
  };
  // test
  console.log(valList.username);

  //   get only username was selected from api, then put it inside props to lifting components
  const [ReadUsername, setReadUsername] = useState("");
  // Render this operation when have new change is valList
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      // using POSt to send what you need of data to database or json file
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(valList),
    })
      .then((e) => {
        console.log(e);
        // Validation error about api if success successFun() will file
        const successFun = () => {
          const url = e.json();
          console.log(url);
          return url;
        };

        if (e.ok === true || e.status === 201) {
          successFun();
        } else {
          // If there is errors
          alert(
            "There is error in the server connection, Api will connection again in the soon"
          );
          navigate("/registerPagerByReact/account");
        }
      })
      .then((e) => {
        // Show all data
        console.log(e);
        return e;
      })
      .then((e) => {
        // Select which one you need of data list like email or username
        console.log(valList[valList.length - 1].username);

        setReadUsername(valList[valList.length - 1].username);
      });
  }, [valList]);
  return (
    <div className="  ">
      <Routes>
        <Route path="/registerPagerByReact" element={<Welcome />} />
        <Route
          path="/registerPagerByReact/account"
          element={<Account reciveVal={reciveValFun} />}
        />
        <Route
          path="/registerPagerByReact/list"
          element={
            <ListData
              ckeckVal={valList}
              ckeckUsername={valList.username}
              Username={ReadUsername}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
