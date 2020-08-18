import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './footer';
import { Switch,Route,Redirect } from 'react-router-dom';
import Nostalgia from './nostalgia';
import About from './events';
import Contact from './contactus';
import NostalgiaGal from './Gallery/NostalgiaGal';
import SocialGal from './Gallery/socialGal';
function Main() {
  return(
    <div className="Main">
      <Header />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/nostalgia" component={Nostalgia}/>
        <Route path="/events" component={About}/>
        <Route path="/Gallery/nostalgia" component={NostalgiaGal}/> 
        <Route path="/Gallery/socialWork" component={SocialGal}/> 
        <Route path="/contactus" component={Contact}/>
        <Redirect to= "/home"/>
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
