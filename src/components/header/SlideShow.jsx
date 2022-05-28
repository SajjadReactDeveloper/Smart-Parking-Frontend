import React from 'react'

function SlideShow() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="d.jpg" alt=""/>
            <div class="carousel-caption d-none d-md-block">
              <h2>Book Parking</h2>
              <p>Book Parking from home to save time</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="e.jpg" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h2>Book Parking</h2>
              <p>Book Parking from home to save time</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="m.jpg" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h2>Book Parking</h2>
              <p>Book Parking from home to save time</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="o.jpg" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h2>Book Parking</h2>
              <p>Book Parking from home to save time</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="p.jpg" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h2>Book Parking</h2>
              <p>Book Parking from home to save time</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="q.jpg" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h2>Book Parking</h2>
              <p>Book Parking from home to save time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow