import React, { PropTypes } from 'react';
import AddFishForm from './AddFishForm';

const Inventory = props => (
  <div>
    <h2>Inventory</h2>
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSamples}>Load Sample Fishes</button>
  </div>
);

Inventory.propTypes = {
  addFish: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
};

export default Inventory;
