import { Link } from 'react-router-dom';
import './navbar.css';

interface BrandItem {
    title?: string;
    href?: string;
}
interface MenuItem {
    title?: string;
    href?: string;
    active?: boolean;
}
interface Props {
    items: MenuItem[];
    brand: BrandItem;
}

const createMenuItem = (item: any, idx: number) => {
    return (
    <p key={item+idx} className={`menu-item ${!item.active ? `menu-link` : ``}`}>{item.title}</p>
    )
}

export const MenuBar: React.FC<Props> = ({items, brand}) => {
  return (
    <div className="menubar">
        {/* <div className="menu-items"><p className="brand">{brand.title}</p></div>
        <div className="menu-items">
            {items.map((item, idx) => createMenuItem(item, idx))}
        </div> */}
        <Link to="/" className="menu-items brand">{brand.title}</Link>
        <Link to="/about" className="menu-items menu-link">about</Link>
        <Link to="/contact" className="menu-items menu-link">contact</Link>
    </div>
  );
}