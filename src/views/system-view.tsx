import { PlanetComponent } from '../components/planet';
import '../styles/views-styles/system-view.css';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Link } from 'react-router-dom';
import { setPlanet } from '../redux/sectorSlice';
import { SystemSideBar } from '../UI/side-bars/system-side-bar';

export const SystemView = () => {
  const dispatch = useAppDispatch();
  const sector = useAppSelector((state) => state.sector.activeSector.sector);
  const playerSystem = useAppSelector((state) => state.sector.activeSystem);
  return (
    <div className=''>
      <SystemSideBar />
      <div className='flex flex-wrap justify-center mt-20 '>
        {playerSystem.systemPlanets.map((planet) => {
          return (
            <>
              <div className={'planet-wrapper p-10 '}>
                <Link
                  to={`/${sector.sectorName}/system/${playerSystem.systemName}/planet/${planet.name}`}
                  onClick={() => dispatch(setPlanet(planet))}
                >
                  <PlanetComponent planet={planet} />
                </Link>
                <p className='text-center'>
                  {planet.name}
                  <br />
                  {planet.ownership}{' '}
                </p>{' '}
                {/* does not display sometimes */}
              </div>
            </>
          );
        })}
        {/* <div className='p-3 m-6 bottom-0 absolute'><Link to={`/${sector.sectorName}/system/star/${playerSystem.systemStar}`}>View star</Link> </div> */}
      </div>
    </div>
  );
};
