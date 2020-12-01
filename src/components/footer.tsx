import * as React from 'react';
import "./footer.css";

interface Props {
}

export const Footer: React.FC<Props> = (props) => {
  return (
    <div className="footerbar">
        <div className="footer-items">
            <div className="footer-item">a</div>
            <div className="footer-item">a</div>
            <div className="footer-item">a</div>
            <div className="footer-item">a</div>
        </div>
    </div>
  );
};
