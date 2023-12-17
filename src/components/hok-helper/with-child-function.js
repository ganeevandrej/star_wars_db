import React from 'react';

export const withChildFunction = (fn) => (Wrapped) => {
  return function func(props) {
    return (
      <Wrapped { ...props }>
        { fn }
      </Wrapped>
    );
  };
};
