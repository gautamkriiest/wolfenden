import React from 'react';
import Header from './Header';
import Home from './Home';
import Gallery from './Gallery/Gallery';
import Footer from './footer';
import { Switch,Route,Redirect } from 'react-router-dom';
function Main() {
  return(
    <div className="Main">
      <Header />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/Gallery/events" component={Gallery}/> 
        <Redirect to= "/home"/>
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
