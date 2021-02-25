import '../styles/global.css';


import { useState } from 'react';
import { ChallengesProvider } from '../contextss/ChallengesContext';

function MyApp({ Component, pageProps }) {

  return (
      <ChallengesProvider>
        <Component {...pageProps} />

      </ChallengesProvider>
  );
}

export default MyApp
