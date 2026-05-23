import React from 'react';

export const ItemView = ({item, itemUrl, children}) => {
  return (
    <>
      <img className="person-image"
        src={itemUrl} alt={ item.name } />

      <div className="card-body">
        <h4>{ item.name }</h4>
        <ul className="list-group list-group-flush">
          { children }
        </ul>
      </div>
    </>
  );
};
