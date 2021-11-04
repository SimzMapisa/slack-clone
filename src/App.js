import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components"

// import components
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Switch>
              <Route path="/" exact></Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display : flex;
  height: 100vh;
`