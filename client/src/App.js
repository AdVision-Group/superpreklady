import React, { useState, useRef } from 'react';
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Switch, Route, HashRouter} from "react-router-dom";
import { theme } from "./themes/theme";
import Landing from "../src/views/Landing";
import Curriculum from "../src/views/Curriculum";
import ContactMain from "./views/ContactMain";
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
            </HashRouter>
        </ThemeProvider>
        );
}
export default App;
