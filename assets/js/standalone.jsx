import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home.jsx";

const root = createRoot(document.getElementById('app'));
root.render(<Home />);