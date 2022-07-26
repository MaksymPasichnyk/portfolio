import { createRoot } from "react-dom/client";
import "./index.scss";
import "./fonts/Neuzeit_ff/Neuzeit Grotesk W01 Regular.otf";
import App from "./App";
import { ThemeContextProvider, ThemeContext } from "./context/Theme";

import * as themes from "./theme/schema.json";
import { setToLocalStorage } from "./utils/storage";

const Index = () => {
	setToLocalStorage("all-themes", themes.default);

  return <App />;
};

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeContextProvider>
    <Index />
  </ThemeContextProvider>
);
