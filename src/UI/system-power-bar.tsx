import styles from '../styles/user-interface-master.module.css';
import { System } from '../utils/system-generator/generate-sector';
interface systemInformation {
  playerSystem: System;
}
interface toggles {
  toggleResources: boolean;
  toggleBuildings: boolean;
  setToggleResources: (flag: boolean) => void;
  setToggleBuildings: (flag: boolean) => void;
}
export const SystemPowerBar = ({
  playerSystem,
  toggleBuildings,
  toggleResources,
  setToggleBuildings,
  setToggleResources,
}: systemInformation & toggles) => {
  console.log({ playerSystem });
  return (
    <div className={styles['system-power-bar-wrapper']}>
      <div className={styles['system-power-bar']}>
        <div className={styles['power-bar-section']}>
          System Power
          <br /> Hangar 700
          <br /> Planetary defenses 3000
        </div>
        <button
          className={styles['system-power-toggle-button']}
          onClick={() => setToggleResources(!toggleResources)}
        >
          Toggle resources
        </button>
        <button
          className={styles['system-power-toggle-button']}
          onClick={() => setToggleBuildings(!toggleBuildings)}
        >
          Toggle Buildings
        </button>
      </div>
    </div>
  );
};
