import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from './routes/Home';
import Prospectives from './routes/Prospectives';
import Board from './routes/Board';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('main-wrapper')
);

function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exaxt path="/prospectives"><Prospectives /></Route>
        <Route exaxt path="/board"><Board /></Route>
      </Switch>
    </BrowserRouter>
  )
}
