import * as React from 'react';

import "./about.css";
export const About: React.FC<any> = (props) => {
  return (
    <div className="portrait-container">
        <img className="portrait" src={`https://dxq463jrikcvb.cloudfront.net/portrait_final.jpeg`} alt="portrait" />
        <p className="bio">Guåhu si Clint Sana. Born 1989, Guam. Lives and works in Bellingham WA</p>
    </div>
  );
};
 