import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setSector } from '../redux/sectorSlice';
import '../styles/views-styles/galatic-view.css';
import { useEffect, useState } from 'react';

export const GalaticView = () => {
  const dispatch = useAppDispatch();
  const sectors = useAppSelector((state) => state.sector);
  useEffect(() => {
    fetch('https://andromeda-backend-production.up.railway.app/api/sectors')
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => console.log(actualData.data[0].attributes.sectorA)) // this should be cleaned up 
    dispatch(setSector(sectors.activeSector))
  }, [])
  return (
    <div>
      <div className='side-bar mt-20 border-1'>news & updates: <br />
        still working on that front end <br /> 
        This is where we will put patch notes
      </div>
      <div className='sectorawrapper'>
        
        <img src='./assets/sample-image.png'></img>
        <Link
          to='/sector-a'
          onClick={() => dispatch(setSector(sectors.activeSector))}
          className='sectora'
        >
          {' '}
          SECTOR A
          <br /> 
          First time? 
          <br />
          Run generate before clicking otherwise it will fail
        </Link>
      </div>
    </div>
  );
};
