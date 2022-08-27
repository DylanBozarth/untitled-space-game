import styles from '../styles/user-interface-master.module.css';
import { System } from '../utils/system-generator/generate-sector';
import { getSystemPower } from '../utils/system-generator/system-power';
interface systemInformation {
  playerSystem: System;
}
interface toggles {
  toggleResources: boolean;
  toggleBuildings: boolean;
  setToggleResources: (flag: boolean) => void;
  setToggleBuildings: (flag: boolean) => void;
}
export const SystemBottomBar = ({
  playerSystem,
  toggleBuildings,
  toggleResources,
  setToggleBuildings,
  setToggleResources,
}: systemInformation & toggles) => {
  const { shipPower, buildingPower } = getSystemPower(playerSystem);
  return (
    <div className={styles['system-bottom-bar-wrapper']}>
      <div className={styles['system-bottom-bar']}>
        <div className={styles['bottom-bar-section']}>
          System Power
          <br /> Hangar {shipPower}
          <br /> Planetary defenses {buildingPower}
        </div>
        <button
          className={styles['system-toggle-button']}
          onClick={() => setToggleResources(!toggleResources)}
        >
          Toggle resources
        </button>
        <button
          className={styles['system-toggle-button']}
          onClick={() => setToggleBuildings(!toggleBuildings)}
        >
          Toggle Buildings
        </button>
      </div>
    </div>
  );
};
