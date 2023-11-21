import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Func from "./Func";
import App from "./App";
import Dummy from "./Dummy";
import Parent from "./login/login";
import reportWebVitals from "./reportWebVitals";
import Demo from "./Demo";
import MiuiSign from "./MiuiSign";
import MiuiSignup from "./MiuiSignup";
import Blog from "./Blog";
import Butt from "./Butt";
import Shoop_Bag from "./Shoop_Bag";
import MyApp from "./MyApp";
import CC2 from "./CC2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <MyApp/>
  <CC2/>
  </React.StrictMode>
  );

// <MiuiSignup/>
// <MiuiSign/>
// <Demo/>
// <Miui/>
// <Parent/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
