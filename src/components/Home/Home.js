import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import News from '../News/News';
import Visit from './Visit';
import '../../css/home-bg.css';


function Home() {
  return (
    <div id="home">
      <div className="head bg-info home-bg">
        <div className="home-content text-white">
          <div className="home-shadow-box px-3 py-4">
            <h1> CyberHawk </h1>
            <div
              className="home-text d-inline-block"
              style={{ maxWidth: '700px', fontSize: '1rem', textAlign: 'justify' }}
            >
              <TypeAnimation
                sequence={[
                'It is a platform for your placement help!',
                1000,
                'It is a platform for your consistent coding',
                1000,
                'It is a platform for your dream jobs',
                1000,
                'It is a platform for yourself :)',
                1000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 45
                style={{ fontSize: '2em' }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </div>
          </div>
        </div>
        <Visit />
      </div>

      <div className="py-4 px-3 mx-auto" style={{ maxWidth: '1200px' }}>
        <h1 className="display-4 text-center"> Team Details </h1>
        <News />
      </div>
    </div>
  );
}

export default Home;
