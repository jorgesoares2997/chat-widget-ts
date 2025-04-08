import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget";
import "./index.css";

const widgetDiv = document.createElement("div");
widgetDiv.id = "chat-widget-container";
document.body.appendChild(widgetDiv);

ReactDOM.createRoot(widgetDiv).render(
  <React.StrictMode>
    <ChatWidget />
  </React.StrictMode>
);
