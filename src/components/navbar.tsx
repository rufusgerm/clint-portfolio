import React, { useState } from 'react';

import './navbar.css';

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
    <div key={item+idx} className={`menu-item ${!item.active ? `menu-link` : ``}`}>{item.title}</div>
    )
}

export const MenuBar: React.FC<Props> = ({items}) => {
    
  return (
    <div className="menubar">
        <div className="menu-items">
            {items.map((item, idx) => createMenuItem(item, idx))}
        </div>
    </div>
  );
}
