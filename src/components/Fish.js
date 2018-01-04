import React, { PropTypes } from 'react';

const Fish = props => (
  <li className="menu-fish">{props.details.name}</li>
);

Fish.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
export default Fish;
