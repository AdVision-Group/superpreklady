import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Switch, Route, HashRouter} from "react-router-dom";
import { theme } from "./themes/theme";
import Landing from "../src/views/Landing";
import Curriculum from "../src/views/Curriculum";
import ContactMain from "./views/ContactMain";
import MobileNavigation from "./components/header/mobileNavigation/MobileNavigation";

const App = () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/zivotopis" component={Curriculum} />
        <Route exact path="/kontakt" component={ContactMain} />
      </Switch>
      <MobileNavigation />
    </HashRouter>
  </ThemeProvider>
);

export default App;
