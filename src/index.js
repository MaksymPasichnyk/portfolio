import { createRoot } from "react-dom/client";
import "./index.scss";
import "./fonts/Neuzeit_ff/Neuzeit Grotesk W01 Regular.otf";
import App from "./App";
import { ThemeContextProvider, ThemeContext } from "./context/Theme";

import * as themes from "./theme/schema.json";
import { setToLocalStorage, getFromLocalStorage } from "./utils/storage";

if (!getFromLocalStorage("all-themes")) {
  setToLocalStorage("all-themes", themes.default);
}

const Index = () => {
  return <App />;
};

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeContextProvider>
    <Index />
  </ThemeContextProvider>
);
