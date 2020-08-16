import React from 'react';
import Header from './Header';
import Home from './Home';
import Gallery from './Gallery/Gallery';
import SocialGallery from './Gallery/socialGal';
import NostalgiaGallery from './Gallery/Nostalgia';
import Footer from './footer';
import { Switch,Route,Redirect } from 'react-router-dom';
import About from './about';
import Contact from './contactus';
function Main() {
  return(
    <div className="Main">
      <Header />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/aboutus" component={About}/>
        <Route path="/Gallery/events" component={Gallery}/> 
        <Route path="/Gallery/nostalgia" component={NostalgiaGallery}/> 
        <Route path="/Gallery/socialWork" component={SocialGallery}/> 
        <Route path="/contactus" component={Contact}/>
        <Redirect to= "/home"/>
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
