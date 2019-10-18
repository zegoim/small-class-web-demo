import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DynamicLoad from "../components/DynamicLoad";
import GlobalDialog from "../components/GlobalDialog";
import { Theme } from "react-uwp/Theme";
import { theme, ThemeContext } from "../utils/themeContext";

import * as revealEffect from "reveal-effect";
revealEffect.setRevealConfig({
  effectEnable: "border",
  hoverSize: 200,
  borderWidth: 4,
  hoverColor: theme.accent
});

export default () => (
  <ThemeContext.Provider value={theme}>
  <Theme theme={theme}>
    <GlobalDialog
      ref={dialog => {
        if (dialog) window.setDialog = dialog.setDialogProps;
      }}
    />
    <BrowserRouter>
      <Switch>
        <Route
          path="/TeacherRoom"
          component={(props: any) => <DynamicLoad {...props}
          dynamicComponent={import ("./TeacherRoom")} />}
        />
        <Route
          path="/StudentRoom"
          component={(props: any) => <DynamicLoad {...props}
          dynamicComponent={import ("./StudentRoom")} />}
        />
        <Route
          path="/StudentRoomWithStudent"
          component={(props: any) => <DynamicLoad {...props}
          dynamicComponent={import ("./StudentRoom")} />}
        />
        <Route
          path="/"
          component={(props: any) => <DynamicLoad {...props}
          dynamicComponent={import ("./Home")} />}
        />
      </Switch>
    </BrowserRouter>
  </Theme>
  </ThemeContext.Provider>
);
