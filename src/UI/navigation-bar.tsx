import '../styles/user-interface-master.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';

export const NavigationBar = () => {
  const [userSector, setUserSector] = useState(
    useAppSelector((state) => state.sector.activeSector.sectorName),
  );
  const [userSystem, setUserSystem] = useState(
    useAppSelector((state) => state.sector.activeSystem.systemName),
  );
  const location = useLocation();
  useEffect(() => {
    if (window.location.href.includes('system')) {
      const locationURL = window.location.href.split('/');
      setUserSystem(locationURL[locationURL.length - 1]);
    } else if (window.location.href.includes('sector')) {
      const locationURL2 = window.location.href.split('/');
      setUserSector(locationURL2[locationURL2.length - 1]);
    } else {
      setUserSector('');
      setUserSystem('');
    }
  }, [location]);
  return (
    <div className='navigation-bar flex-auto mb-20'>
      <h3 className='text-center'>Navigation</h3>
      <Link to='/' onClick={() => setUserSector('')} className='navigation-bar-text flex-1 w-33'>
        <div className='ui-border-box'>
          <div className='navigation-bar-text'>Andromeda</div>
        </div>
      </Link>
      <Link to={`/${userSector}`} className='navigation-bar-text'>
        <div
          className={
            userSector
              ? 'ui-border-box'
              : ''
          }
          onClick={() => setUserSystem('')}
        >
          <div className='navigation-bar-text'>{userSector}</div>
        </div>
      </Link>
      <div
        className={
          userSystem
            ? 'ui-border-box'
            : ''
        }
      >
        <div className='navigation-bar-text'>{userSystem}</div>
      </div>
    </div>
  );
};
