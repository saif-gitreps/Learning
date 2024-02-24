import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
   return (
      <>
         <h1>hello</h1>
      </>
   );
}

const newReactElement = React.createElement(
   "a",
   { href: "google.com", target: "_blank" },
   "Click"
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>newReactElement</React.StrictMode>
);
