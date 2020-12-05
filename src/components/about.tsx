import * as React from 'react';
import portrait from "../Portrait_Finished.jpeg";

import "./about.css";
export const About: React.FC<any> = (props) => {
  return (
    <div className="portrait-container">
        <img className="portrait" src={portrait} alt="portrait" />
        <p className="bio">Guåhu si Clint Sana. Born 1989, Guam. Lives and works in Bellingham WA</p>
    </div>
  );
};
 