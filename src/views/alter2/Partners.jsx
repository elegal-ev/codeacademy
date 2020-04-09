import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css';
import kpmg from '../../assets/img/logos/1.png';

const params = {
  loop: false,
  autoplay: {
    delay: 2500,
    disableOnIteration: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
};

const Partners = () => {
  return (
    <section class="section">
      <h2 style={{ textAlign: 'center' }}>Kooperationspartner</h2>
      {/* <div class="container py-5 border-bottom">
        <Swiper {...params}>
          {[1].map(i => (
            <div class="swiper-slide">/
              <img
                src={require(`assets/img/logos/${i}.png`)}
                class="img-responsive"
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </div>
          ))}
        </Swiper>
      </div> */}
      <img
        src={kpmg}
        alt=""
        style={{
          maxHeight: '60px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '3vh',
        }}
        class="img-responsive"
      />
    </section>
  );
};

export default Partners;
