import React, { useEffect, useRef, useState } from 'react';
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