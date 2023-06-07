import React from "react";

const Review = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide py-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex align-items-center justify-content-evenly">
              <img
                src="./images/ReviewImg.svg"
                className="d-block w-25"
                alt="..."
              />
              <div className="w-50">
                <h4 className="fw-bold">Review</h4>
                <h5 className="py-4">
                  "I never thought a web app could have such a positive impact
                  on my mental health until I found MindEase. It's like having a
                  personal therapist right at my fingertips. The guided
                  self-help resources and mood tracking feature have been
                  invaluable in helping me understand and manage my emotions.
                  Highly recommended for anyone seeking a convenient and
                  effective way to improve their mental well-being!"
                </h5>
                <h4 className="fw-bold">Lily Watson</h4>
                <h5>Student At Stanford</h5>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex align-items-center justify-content-evenly">
              <img
                src="./images/ReviewImg.svg"
                className="d-block w-25"
                alt="..."
              />
              <div className="w-50">
                <h4 className="fw-bold">Review</h4>
                <h5 className="py-4">
                  "MindEase has truly been a game-changer for me. The therapist
                  finder feature made it easy for me to connect with a licensed
                  professional who understands my needs. The virtual therapy
                  sessions have provided a safe and comfortable space for me to
                  address my mental health concerns. I feel supported and
                  empowered on my healing journey thanks to this amazing web
                  app!"
                </h5>
                <h4 className="fw-bold">Lily Watson</h4>
                <h5>Student At Stanford</h5>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex align-items-center justify-content-evenly">
              <img
                src="./images/ReviewImg.svg"
                className="d-block w-25"
                alt="..."
              />
              <div className="w-50">
                <h4 className="fw-bold">Review</h4>
                <h5 className="py-4">
                  "I can't express how grateful I am for MindEase. The peer
                  support communities have connected me with a network of
                  individuals who truly understand what I'm going through. Being
                  able to share my experiences and receive encouragement from
                  others who have walked a similar path has been incredibly
                  uplifting. This web app has given me a sense of belonging and
                  reminded me that I'm not alone in my struggles."
                </h5>
                <h4 className="fw-bold">Lily Watson</h4>
                <h5>Student At Stanford</h5>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev my-auto carousel-btn"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next my-auto carousel-btn"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Review;
