import React from 'react';
import './css/Banner.css';
import imgBanner from '../img/banner.png';

function Banner() {
  return (
    <section>
      <div className='img-banner'>
        <img src={imgBanner} alt='Banner'/>
      </div>
    </section>
  );
}

export default Banner;