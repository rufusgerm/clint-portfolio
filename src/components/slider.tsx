import React, { useEffect, useState } from 'react';
import { Slide } from './slide';
import "./slider.css";
import { SliderArrow } from './sliderarrow';

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
    src: "one",
    altText: 'Slide 1',
    caption: "`Mannginge'/ Amen`; oil on canvas",
  },
  {
    src: "two",
    altText: 'Slide 2',
    caption: "`guam`; oil on canvas",
  },
  {
    src: "three",
    altText: 'Slide 3',
    caption: "`16 tins of spam`; oil on canvas",
  },
  {
    src: "four",
    altText: 'Slide 4',
    caption: "`Transmission from the dead`; oil on canvas", 
  },
  {
    src: "five",
    altText: 'Slide 5',
    caption: "`[untitled]`; oil on canvas"
  }
];

let timer: any;

const createSlides = (slide: number, item: GalleryItem, index: number) => {
  return slide !== index ? <Slide content={item} key={index+item.caption} /> : <Slide visible content={item} key={index} />
}
export const Slider: React.FC<Props> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastSlide = items.length - 1;
  const nextSlide = (direction: string) => {
    if(direction === 'reverse') {
      setCurrentSlide(currentSlide === 0 ? lastSlide : currentSlide - 1);
    }
    else if(direction === 'forward') {
      setCurrentSlide(currentSlide === lastSlide ? 0 : currentSlide + 1);
    }
  }
  
  useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      nextSlide('forward');
    }, 7500);
  });

  return (
    <div className="slider">
      <SliderArrow direction={"left"} handleClick={() => nextSlide('reverse')}/>
      {items.map((item, idx) => createSlides(currentSlide, item, idx))}
      <SliderArrow direction={"right"} handleClick={() => nextSlide('forward')}/>
    </div>
  );
}