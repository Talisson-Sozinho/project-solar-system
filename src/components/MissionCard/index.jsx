import React from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <article data-testid="mission-card">
        <h4 data-testid="mission-name">{name}</h4>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </article>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
