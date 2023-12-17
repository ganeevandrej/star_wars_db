import React from 'react';
import {withRouter} from '../../hok-helper';

import {PersonDetails, PersonList} from '../../sw-components';
import {Row} from '../../row';

const PeoplePage = ({urlParams, navigate}) => {
  return (
    <Row
      left={<PersonList onClickItem={(id) => navigate(`/people/${id}`)} />}
      right={<PersonDetails itemId={ urlParams.id } />}
    />
  );
};

export default withRouter(PeoplePage);
