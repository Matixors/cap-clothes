import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ReactComponent as CapLogo } from '../../../assets/crown.svg';
import { UserContext } from '../../../contexts/user.context';

import './navigation.styles.scss';

export default function Naigation() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

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
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
