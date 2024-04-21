import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">

      <div >
        <h1>{heroBanner.largeText1}</h1>
        <h3>{heroBanner.midText}</h3>
      </div>

      <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

     
    </div>
  )
}

export default HeroBanner