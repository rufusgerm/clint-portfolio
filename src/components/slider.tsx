import React, { useEffect, useRef, useState } from 'react';
import { Slide } from './slide';
import "./slider.css";
import { SliderArrow } from './sliderarrow';
import one from "../images/one.jpeg";
import two from "../images/two.jpeg";
import three from "../images/three.jpeg";
import four from "../images/four.jpeg";
import five from "../images/five.jpeg";

interface GalleryItem {
  src: string;
  altText: string;
  caption: string;
}
interface Props {
  items: GalleryItem[];
}

const items = [
  {
    src: one,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: two,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: three,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: four,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: five,
    altText: 'Slide 5',
    caption: 'Slide 5'
  }
];

const createSlides = (slide: number, item: GalleryItem, index: number) => {
  return slide !== index ? <Slide content={item} key={index} /> : <Slide visible content={item} key={index} />
}

export const Slider: React.FC<Props> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastSlide = items.length - 1;

  const nextSlide = (direction: string) => {
    if(direction === 'reverse') {
      setCurrentSlide(currentSlide === 0 ? lastSlide : currentSlide - 1);
    }
    setCurrentSlide(currentSlide === lastSlide ? 0 : currentSlide + 1);
    
  }

  // const autoPlayRef = useRef<any>();

  // useEffect(() => {
  //   autoPlayRef.current = nextSlide('forward');
  // });
  // useEffect(() => {
  //   const play = () => {
  //     autoPlayRef.current();
  //   }
  //   const interval = setInterval(play, 3000);
  //   return () => clearInterval(interval);
  // }, []);
  

  return (
    <div className="slider">
      <SliderArrow direction={"left"} handleClick={() => nextSlide('reverse')}/>
      {items.map((item, idx) => createSlides(currentSlide, item, idx))}
      <SliderArrow direction={"right"} handleClick={() => nextSlide('forward')}/>
    </div>
  );
}