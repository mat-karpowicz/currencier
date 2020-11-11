import React from 'react';
import PropTypes from 'prop-types';

function Landing({ setAddComponentDisplay }) {
  return (
    <div className="landing">
      <p className="landing-text">
        You have no currencies added to your favourites!
      </p>
      <p className="landing-text">Do it now!</p>
      <button
        type="button"
        className="btn landing-btn"
        onClick={() => setAddComponentDisplay(true)}
      >
        add currencies
      </button>
    </div>
  );
}

Landing.propTypes = {
  setAddComponentDisplay: PropTypes.func.isRequired,
};

export default Landing;
