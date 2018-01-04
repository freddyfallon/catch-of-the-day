import React, { PropTypes } from 'react';
import { formatPrice } from '../helpers';

const Fish = (props) => {
  const { details } = props;
  return (
    <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">{details.name}</h3>
      <span className="price">{ formatPrice(details.price)}</span>
      <p>{details.desc}</p>
    </li>
  );
};

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
