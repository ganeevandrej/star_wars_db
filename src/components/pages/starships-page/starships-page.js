import React from "react";
import { withRouter } from "../../hok-helper";

import { StarshipDetails, StarshipList } from "../../sw-components";
import { Row } from "../../row";

const StarshipsPage = ({ urlParams, navigate }) => {
    return (
        <Row
            left={<StarshipList onClickItem={(id) => navigate(`/starships/${id}`)}/>}
            right={<StarshipDetails itemId={urlParams.id}/>}
        />
    );
}

export default withRouter(StarshipsPage);


