import React from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import {theme} from "./themes/theme";
import Landing from "../src/views/Landing";
import Curriculum from "../src/views/Curriculum";
import Contact from "../src/views/Landing"
import MobileNavigation from "./components/header/mobileNavigation/MobileNavigation";

const App = () => (
    <ThemeProvider theme={theme}>
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={Curriculum} />
          <Route exact path="/store" component={Contact} />
        </Switch>
        <MobileNavigation/>
      </BrowserRouter>
    </ThemeProvider>
)

export default App