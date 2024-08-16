import React from 'react'

const Hero = ({ title, imageUrl }) => {
    return (
      <>
        <div className="hero container">
          <div className="banner">
            <h1>{title}</h1>
            <p>
              SuperMom is the centralized online platform that adequately addresses the
              diverse requirements of pregnant mothers. We create 
              solutions that simplifies these tasks and provides a seamless experience for pregnant moms
            </p>
          </div>
          <div className="banner">
            <img src={imageUrl} alt="Mom" className="animated-image" />
            <span>
              <img src="/Vector.png" alt="vector" />
            </span>
          </div>
        </div>
      </>
    );
  };

export default Hero