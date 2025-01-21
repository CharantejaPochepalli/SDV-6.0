import React from 'react';
import './Carousel.css'; 

export const Carousel = () => {
  return (
    <div>
      <div className="car-container">
        <div id="car-carousel">
          <figure>
            <img src="/dnd1.jpg" alt="Nature 1" className='pic' />
          </figure>
          <figure>
            <img src="/dnd2.jpg" alt="Nature 2" className='pic' />
          </figure>
          <figure>
            <img src="/dnd5.jpg" alt="Nature 3" className='pic'  />
          </figure>
          <figure>
            <img src="/dnd4.jpg" alt="Nature 4" className='pic'  />
          </figure>
          <figure>
            <img src="/dnd1.jpg" alt="Nature 5" className='pic'  />
          </figure>
          <figure>
            <img src="/dnd10.jpg" alt="Nature 6" className='pic'  />
          </figure>
          <figure>
            <img src="/dnd1.jpg" alt="Nature 7" className='pic' />
          </figure>
          <figure>
            <img src="/dnd5.jpg" alt="Nature 8" className='pic' />
          </figure>
          <figure>
            <img src="/dnd1.jpg" alt="People 9" className='pic' />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
