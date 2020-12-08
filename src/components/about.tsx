import * as React from 'react';

import "./about.css";
export const About: React.FC<any> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <div className={`portrait-container ${isLoaded ? `portrait-visible` : ``}`}>
        <img 
        className={`portrait`}
        src={`https://dxq463jrikcvb.cloudfront.net/portrait_final.jpeg`} 
        alt="portrait" 
        onLoad={() => setIsLoaded(true)} />
        <p className="bio">Guåhu si Clint Sana. Born 1989, Guam. Lives and works in Bellingham WA</p>
    </div>
  );
};
 