import { Link } from 'react-router-dom';
import { Star } from '../../components/star';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSystem, setNCO } from '../../redux/sectorSlice';
import { getXfromCords, getYfromCords } from '../../utils/system-generator/system-functions';
import { NCOComponent } from '../../components/NCO';
import { useEffect } from 'react';
import axios from 'axios';

export const SectorA = () => {
  const dispatch = useAppDispatch();
  const sector = useAppSelector((state) => state.sector.activeSector);
  useEffect(() => {
   console.log('a')
  }, []);

  {
    return (
      <div className=''>
        <div className='sector-background'></div>

        {sector.NCO.map((single) => {
          return (
            <div key={single.cords} style={{
              left: `${getXfromCords(single.cords)}vw`,
              top: `${getYfromCords(single.cords)}vh`,
            }}
              className='absolute '>
              <Link to={`/${sector.sectorName}/${single.name}`} onClick={() => dispatch(setNCO(single))}>
                <NCOComponent NCOName={single.name} effect={single.effect} cords={single.cords} distanceMapValues={sector.distancesMap[single.cords]} />
              </Link>
            </div>
          )
        })}
        {sector.systems.map((item) => {
          return (
            <div
              key={item.systemName}
              style={{
                left: `${getXfromCords(item.cords)}vw`,
                top: `${getYfromCords(item.cords)}vh`,
              }}
              className='absolute'
            >
              <Link to={`/system/${item.systemName}`} onClick={() => dispatch(setSystem(item))}>
                <Star
                  systemName={item.systemName}
                  systemStar={item.systemStar}
                  distanceMapValues={sector.distancesMap[item.systemName]}
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
};