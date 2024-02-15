import React from "react";
import { createRoot } from "react-dom/client";
import "./Resources/css/app.css";
import { firebase } from "./firebase";
import Routes from "./routes";

const App = (props) => {
  return <Routes {...props} />;
};

const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//   </React.StrictMode>
// );

firebase.auth().onAuthStateChanged((user) => {
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App user={user} />);
  // console.log(user);
});
