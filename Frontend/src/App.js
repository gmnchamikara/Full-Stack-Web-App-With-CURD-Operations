import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import PostMessages from "./components/PostMessages";
import { store } from "./actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

import NavBar from './components/NavBar';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <AppBar position="static" color="#76ff03">
          <Typography
            variant="h2"
            align="center">
            Recipe Tracker
          </Typography>
        </AppBar>
        <NavBar/>
        <PostMessages />
        <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
      </Container>
    </Provider>
  );
}

export default App;
