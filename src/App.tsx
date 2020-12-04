import React from 'react';
import { Footer } from './components/footer';
import { Slider } from './components/slider';
import {MenuBar} from './components/navbar';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

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

const galleryItems = [
  {
    src: 'https://i.pinimg.com/originals/bb/55/66/bb5566c14a95f1897b1e258e0fcb69fe.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://www.superprof.com/blog/wp-content/uploads/2019/05/history-of-painting-1060x771.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://media.overstockart.com/optimized/cache/data/product_images/VG485-1000x1000.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

function App() {
  return (
    <div className="App">
      <MenuBar brand={brand} items={navItems} />
      <Slider items={galleryItems} />
      <Footer />
    </div>
  );
}

export default App;