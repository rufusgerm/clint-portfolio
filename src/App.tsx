import React from 'react';
import { Footer } from './components/footer';
import { Slider } from './components/slider';
import {MenuBar} from './components/navbar';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { About } from './components/about';
import { Switch, Route } from 'react-router-dom';
import { Error } from './components/error';

library.add(fas, fab);

const brand = {
    title: `clint sana`,
    href: `/`,
};

const navItems = [
  {
    title: `about`,
    href: `/about`,
    active: false,
  },
  {
    title: `contact`,
    href: `/contact`,
    active: false,
  },
]

function App() {
  return (
    <div className="App">
      <MenuBar brand={brand} items={navItems} />
      <Switch>
        <Route path="/" component={Slider} exact/>
        <Route path="/about" component={About} />
        <Route component={Error}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;