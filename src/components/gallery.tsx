import React, { useState } from 'react';
import "./gallery.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    return
  });

  return (
      <div 
      className="gallery-carousel">
        <div className="carousel-arrow"><FontAwesomeIcon className="arrow-icon left-arrow" icon="chevron-left" size="lg"/></div>
        <div className="carousel-item"><img className="current-img" src="https://i.pinimg.com/originals/bb/55/66/bb5566c14a95f1897b1e258e0fcb69fe.jpg" alt="test-img"/></div>
        <div className="carousel-arrow"><FontAwesomeIcon className="arrow-icon right-arrow" icon="chevron-right" size="lg"/></div>
    </div>
  );
}