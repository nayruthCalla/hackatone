import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SomosBelcorp} from './Belcorp/Index'
import {Login} from './Login/Index'
import {Home} from './Home/Index'
import {Catalogue} from './Catalogue/Index'
import {ListOrders} from './Orders/View'

function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SomosBelcorp}/>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/catalogue' component={Catalogue}/>
        <Route path='/orders' component={ListOrders}/>
      </Switch>
    </Router>
  );
}

export default Routes;
