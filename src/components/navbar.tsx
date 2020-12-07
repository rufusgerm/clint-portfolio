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

export const MenuBar: React.FC<Props> = ({items, brand}) => {
  return (
    <div className="menubar">
        <Link to="/" className="menu-items brand">{brand.title}</Link>
        <Link to="/about" className="menu-items menu-link">about</Link>
    </div>
  );
}