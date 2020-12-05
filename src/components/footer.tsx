import * as React from 'react';
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
interface Props {
}

export const Footer: React.FC<Props> = (props) => {
  const d: Date = new Date();
  return (
    <div className="footerbar">
        <div className="footer-items">
            <div className="footer-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/crintasan/?hl=en"><FontAwesomeIcon className="icon" icon={faInstagram}/></a></div>
            <div className="footer-divider"><p></p></div>
            <div className="footer-copyright"><p>Clint Sana &copy; {d.getFullYear()}</p></div>
        </div>
    </div>
  );
};
