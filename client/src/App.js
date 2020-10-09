import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Switch, Route, HashRouter, Redirect} from "react-router-dom";
import { theme } from "./themes/theme";
import Landing from "../src/views/Landing";
import Curriculum from "../src/views/Curriculum";
import ContactMain from "./views/ContactMain";
import MobileNavigation from "./components/header/mobileNavigation/MobileNavigation";
import ScrollToTop from "../src/components/ScrollToTop"
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <ScrollToTop/>
                <Switch>
                    <Route
                        exact path='/'
                        render={(props) => (
                            <Landing {...props}   />
                        )}
                    />
                    <Route
                        exact path='/zivotopis'
                        render={(props) => (
                            <Curriculum {...props}  />
                        )}
                    />
                    <Route
                        exact path='/kontakt'
                        render={(props) => (
                            <ContactMain {...props}  />
                        )}
                    />
                </Switch>
                <MobileNavigation />
            </HashRouter>
        </ThemeProvider>
        );
}
export default App;
