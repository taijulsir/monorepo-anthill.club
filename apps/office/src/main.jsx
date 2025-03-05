import React from "react";
import ReactDOM from "react-dom/client";  // Import ReactDOM here
import Setup from "@internal/utils/src/Setup/Setup";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Setup routes={routes} />
);
