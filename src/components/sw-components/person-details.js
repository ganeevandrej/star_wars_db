import React from 'react';

import {withSwapiService} from '../hok-helper';
import {ErrorBoundary} from '../error-boundary';

import {Record} from '../record';
import ItemDetails from '../item-details';

const PersonDetails = ( props ) => {
  return (
    <ErrorBoundary>
      <ItemDetails { ...props }>
        <Record label="Gender" field="gender" />
        <Record label="Eye Color" field="eyeColor" />
      </ItemDetails>
    </ErrorBoundary>
  );
};

const mapMethodsToProps = ({getPerson, getPersonImageUrl}) => {
  return {
    getData: getPerson,
    getImageUrl: getPersonImageUrl,
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
