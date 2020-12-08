import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

interface Props {
    direction: string;
    handleClick: () => any;
}
export const SliderArrow: React.FC<Props> = ({direction, handleClick}) => {
  return (
    <div className={`slider-arrow ${direction}-arrow`}>
        <FontAwesomeIcon onClick={() => handleClick()} className="arrow-icon" icon={`chevron-${direction}` as IconName} size="lg"/>
    </div> 
  );
};