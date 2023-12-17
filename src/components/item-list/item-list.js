import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

export const ItemList = ({data, onClickItem, children: renderItem}) => {
  const renderItems = (arr) => {
    return arr.map((item) => {
      const {id} = item;
      const label = renderItem(item);
      return (
        <li
          key={ id }
          onClick={() => onClickItem(id) }
          className="list-group-item">
          { label }
        </li>
      );
    });
  };

  return (
    <ul className="item-list list-group">
      { renderItems(data) }
    </ul>
  );
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickItem: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
