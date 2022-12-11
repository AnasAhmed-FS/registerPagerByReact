import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
export default function Dep() {
  return (
    <div>
      <Router>
        <App />
      </Router>
    </div>
  );
}
