import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

// Note: intentionally not wrapped in <React.StrictMode> — the legacy
// per-page scripts below do direct DOM manipulation (event listeners,
// class toggles) that isn't safe to double-invoke, which StrictMode's
// dev-only mount/unmount/mount cycle would otherwise trigger.
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
