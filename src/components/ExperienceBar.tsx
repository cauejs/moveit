import React, { useContext } from 'react';
import { ChallengesContext } from '../contextss/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const porcentToNextLevel = Math.floor(currentExperience * 100) / experienceToNextLevel;

  return (
      <header className={styles.experienceBar}>
          <span>0 xp</span>
          <div>
              <div style={{width: `${porcentToNextLevel}`}}/>

              <span className={styles.currentExperience} style={{left: `${porcentToNextLevel}`}}>
                  {currentExperience}xp
              </span>
          </div>
          <span>{experienceToNextLevel} xp</span>
      </header>
  );
}

export default ExperienceBar;