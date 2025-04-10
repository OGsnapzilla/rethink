import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import photo from '../assets/frontpage.webp';
import mystyle from './ScrollUp.module.css';

function ScrollupComponent() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const contentPosition = document.getElementById('content').getBoundingClientRect().top;
      if (contentPosition <= window.innerHeight * 0.8) {
        setContentVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={mystyle.startcontent}>
        {/* SCROLL DOWN ANIMATION */}
        <img src={photo} className={mystyle.startPhoto} alt="Photo" />
        <DotLottieReact
          src="https://lottie.host/6076886e-9e45-4968-b7e2-fac0408a5ab5/pv2JtJTWKE.lottie" 
          className={mystyle.animation}
          loop
          autoplay
        />
      </div>

     
    </>
  );
}

export default ScrollupComponent;