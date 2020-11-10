import React from 'react';

function Landing() {
  return (
    <div className="landing">
      <p className="landing-text">
        You have no currencies added to your favourites!
      </p>
      <p className="landing-text">Do it now!</p>
      <button type="button" className="btn landing-btn">
        add currencies
      </button>
    </div>
  );
}
export default Landing;
