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
import Programs from './routes/Programs';
import Contact from './routes/Contact';

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
        <Route exact path="/"><Home key={Math.random()}/></Route>
        <Route exaxt path="/prospectives"><Prospectives /></Route>
        <Route exaxt path="/board"><Board /></Route>
        <Route exaxt path="/programs"><Programs /></Route>
        <Route exaxt path="/contact"><Contact /></Route>
      </Switch>
    </BrowserRouter>
  )
}
