import * as React from 'react';

import "./slide.css";

interface Content {
    src: string;
    altText: string;
    caption: string;
}

interface Props {
    content: Content;
    visible?: boolean;
}

export const Slide: React.FC<Props> = ({content, visible}) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    return (
        <div className={`slide-content ${visible && isLoaded ? `slide-visible` : ``}`}>
            <div className="slide">
                <img 
                className="slide-img" 
                src={`https://dxq463jrikcvb.cloudfront.net/${content.src}.jpeg`} 
                alt={content.altText} 
                onLoad={() => setIsLoaded(true)} />
            </div>
        </div>
    );
};