import React from 'react';
import { getFunName } from '../helpers';

const StorePicker = () =>
  (
    <form className="store-selector">
      <h2>Please enter a store</h2>
      <input type="text" required placeholder="Store name" defaultValue={getFunName()} />
      <button type="submit">Visit store</button>
    </form>
  );

export default StorePicker;
