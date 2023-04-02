import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { StarshipDetails, StarshipList } from "../sw-components";
import { Row } from "../row";

export const StarshipsPage = () => {
    const urlParams = useParams();
    const navigate = useNavigate();

    return (
        <Row
            left={<StarshipList onClickItem={(id) => navigate(`/starships/${id}`)}/>}
            right={<StarshipDetails itemId={urlParams.id}/>}
        />
    );
}


