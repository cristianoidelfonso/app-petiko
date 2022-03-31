import React from 'react';
import bannerV2 from '../banner_site_v2.png';

const Home = () => {
  return (
    <div className="carousel slide" id="carouselExampleControls"  data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={bannerV2} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={bannerV2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={bannerV2} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Home