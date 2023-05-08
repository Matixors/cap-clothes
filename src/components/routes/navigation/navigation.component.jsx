import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CapLogo } from '../../../assets/crown.svg';

import './navigation.styles.scss';

export default function Naigation() {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CapLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
