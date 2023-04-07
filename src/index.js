import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from './routes/Home';
import Programs from './routes/Programs';
import Board from './routes/Board';
import Committees from './routes/Committees';
import Gallery from './routes/Gallery';
import Prospectives from './routes/Prospectives';
import ProspectivesOld from './routes/ProspectivesOld';
import Contact from './routes/Contact';
import Shop from './routes/Shop';
import Service from './routes/Service';
import OSP from './util/OSP';

import ResetScroll from './util/ResetScroll'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('main-wrapper')
);

function Routes(props) {
  return (
    <BrowserRouter>
      <ResetScroll>
        <Switch>
          <Route exact path="/"><Home key={Math.random()}/></Route>
          <Route exaxt path="/programs"><Programs /></Route>
          <Route exaxt path="/committees"><Committees /></Route>
          <Route exaxt path="/board"><Board /></Route>
          <Route exaxt path="/gallery"><Gallery /></Route>
          <Route exaxt path="/prospectives"><Prospectives /></Route>
          <Route exaxt path="/contact"><Contact /></Route>
          <Route exaxt path="/shop"><Shop /></Route>
          <Route exaxt path="/prospectives"><Prospectives /></Route>
          {/* <Route exact path="/OSP"><OSP/></Route> */}
          {/* <Route exaxt path="/service"><Service /></Route> */}
        </Switch>
      </ResetScroll>
    </BrowserRouter>
  )
}
