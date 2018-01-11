import React, { PropTypes } from 'react';
import { formatPrice } from '../helpers';

const Fish = (props) => {
  const { details, index } = props;
  const isAvailable = details.status === 'available';
  const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';
  return (
    <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">{details.name}</h3>
      <span className="price">{ formatPrice(details.price)}</span>
      <p>{details.desc}</p>
      <button onClick={() => props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
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
  addToOrder: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
};
export default Fish;
