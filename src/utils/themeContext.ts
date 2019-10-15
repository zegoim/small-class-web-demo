import * as React from "react";
import { getTheme } from "react-uwp/Theme";

const isDarkTheme = true;
export const theme: ReactUWP.ThemeType = getTheme({
  useFluentDesign: true,
  desktopBackgroundImage: require("../assets/images/02-bg.jpg"),
  themeName: isDarkTheme ? "dark" : "light",
  accent: "#0D70FF"
});

export const ThemeContext = React.createContext(theme);

export function makeStyles<T>() {

}