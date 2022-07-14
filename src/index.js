import { createRoot } from "react-dom/client";
import "./index.scss";
import "./fonts/Neuzeit_ff/Neuzeit Grotesk W01 Regular.otf";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";


const root = createRoot(document.getElementById("root"));

root.render(<Router><App /></Router>);
