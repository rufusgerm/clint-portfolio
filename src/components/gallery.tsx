import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap';
import "./gallery.css"

interface GalleryItem {
    src?: string;
    altText?: string;
    caption?: string;
}

interface Props {
    items?: GalleryItem[];
}

export const Gallery: React.FC<Props> = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const galleryCount = items ? items.length : 0;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === galleryCount - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? galleryCount - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items?.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
      <div 
      className="gallery-carousel wtf">
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    </div>
  );
}