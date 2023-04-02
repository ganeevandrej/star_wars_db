import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PlanetDetails, PlanetList } from "../sw-components";

import { Row } from "../row";

export const PlanetsPage = () => {
    const urlParams = useParams();
    const navigate = useNavigate();

    return (
        <Row
            left={<PlanetList onClickItem={(id) => navigate(`/planets/${id}`)}/>}
            right={<PlanetDetails itemId={urlParams.id}/>}
        />
    );
}