import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
      <div className={styles.name}>
        <h1>Vincent Bowen</h1>
      </div>
  );
}

function AboutFeatures() {
  return (
    <div className={styles.container_col}>
      <div className={styles.column}>
        <p>
          Hello! I am a junior studying Computer Science at the <a href="https://www.colorado.edu/" target="_blank" rel="noopener noreferrer">University of Colorado Boulder</a>.
          I am minoring in Biomedical Engineering and receiving a certificate in Engineering Leadership. This fall, I have been admitted into an <a href="https://www.colorado.edu/cs/academics/undergraduate-programs/accelerated-masters-programs/data-science-accelerated-masters" target="_blank" rel="noopener noreferrer">accelerated Master of Science program</a> in Data Science that I am very excited to begin. Currently, I am extremely passionate about using
          technology and software in healthcare/medicine. Over the past months, I have been volunteering as a Machine Learning Engineer at the 
          <a href="https://ai4good.org/what-we-do/climatesdgscanners/" target="_blank" rel="noopener noreferrer"> AI for Good Foundation</a> where I work with NLP models and graph databases to connect extracted entities. 
          Additionally, I am a course assistant for <a href="https://catalog.colorado.edu/courses-a-z/csci/" target="_blank" rel="noopener noreferrer">CSCI 3022 - Intro to Data Science with Probability and Statistics</a>.
        </p>
        <p>
          During my free time, I enjoy cycling (check out my <a href="https://www.strava.com/athletes/119427941" target="_blank" rel="noopener noreferrer">Strava</a>), getting outdoors, and listening to music!
          I also love implementing new technologies into personal projects and expanding my knowledge beyond what is covered in my coursework!!
        </p>
      </div>
      <div className={styles.column}>
        <img src={"img/head_shot.jpeg"} alt="My head shot" style={{ borderRadius: '7%', width: '75%'}}/>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Vincent Bowen`}>
      <HomepageHeader />
      <main>
        <AboutFeatures />
      </main>
    </Layout>
  );
}
