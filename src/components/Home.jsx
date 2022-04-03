import React from 'react';
import styled from 'styled-components';
import banner from '../banner.png';
import bannerV1 from '../banner_v1.png';
import bannerV2 from '../banner_v2.png';
import bannerV3 from '../banner_v3.png';
import bannerV4 from '../banner_v4.png';
import bannerV5 from '../banner_v5.png';

const BtnPrev = styled.button `
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: 0 0;
  border: 0;
  opacity: .5;
  transition: opacity .15s ease;
`;

const BtnNext = styled.button `
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: 0 0;
  border: 0;
  opacity: .5;
  transition: opacity .15s ease;
`;

const Home = () => {
  return (
    <>
    
    <div id="carouselDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" style={{borderRadius:"50%",width: "15px",height:"15px"}} data-bs-target="#carouselDark" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true" ></button>
        <button type="button" style={{borderRadius:"50%",width: "15px",height:"15px"}} data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" style={{borderRadius:"50%",width: "15px",height:"15px"}} data-bs-target="#carouselDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" style={{borderRadius:"50%",width: "15px",height:"15px"}} data-bs-target="#carouselDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" style={{borderRadius:"50%",width: "15px",height:"15px"}} data-bs-target="#carouselDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2500">
            <img src={bannerV5} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Petiko First Slide</h5>
              <p>Petiko One.</p>
            </div>
        </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src={bannerV1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Petiko Second Slide</h5>
              <p>Petiko Two.</p>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <img src={bannerV2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Petiko Third Slide</h5>
              <p>Petiko Three.</p>
            </div>
        </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src={bannerV3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Petiko Fourth Slide</h5>
              <p>Petiko Four.</p>
            </div>
        </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src={bannerV4} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Petiko Fifth Slide</h5>
              <p>Petiko Five.</p>
            </div>
        </div>
      </div>
      <BtnPrev type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </BtnPrev>
      <BtnNext type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </BtnNext>
    </div>

    <div className="container my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        
      </div> {/*Fim row */}
     </div> {/*Fim container */}
    </>
  )
}

export default Home