import React, { useState } from 'react';

import './navbar.css';

const brand = {
    title: `clint.sana`,
    href: `/`,
    active: true,
};
interface MenuItem {
    title?: string;
    href?: string;
    active?: boolean;
}

interface Props {
    items: MenuItem[];
}

const createMenuItem = (item: any, idx: number) => {
    return (
    <p key={item+idx} className={`menu-item ${!item.active ? `menu-link` : ``}`}>{item.title}</p>
    )
}

export const MenuBar: React.FC<Props> = ({items}) => {
    
  return (
    <div className="menubar">
        <div className="brand"><h6>{brand.title}</h6></div>
        <div className="menu-items">
            {items.map((item, idx) => createMenuItem(item, idx))}
        </div>
    </div>
  );
}
