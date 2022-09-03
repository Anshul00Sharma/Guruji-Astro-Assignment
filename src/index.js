// importing react essentails
import React from "react";
import ReactDOM from "react-dom/client";
// import App Component
import App from "./App";
// import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);
