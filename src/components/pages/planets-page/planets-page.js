import React from "react";
import { withRouter } from "../../hok-helper";

import { PlanetDetails, PlanetList } from "../../sw-components";
import { Row } from "../../row";

const PlanetsPage = ({ urlParams, navigate }) => {
    return (
        <Row
            left={<PlanetList onClickItem={(id) => navigate(`/planets/${id}`)}/>}
            right={<PlanetDetails itemId={urlParams.id}/>}
        />
    );
}

export default withRouter(PlanetsPage);