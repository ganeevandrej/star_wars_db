import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PersonDetails, PersonList } from "../sw-components";

import { Row } from "../row";

export const PeoplePage = () => {
    const urlParams = useParams();
    const navigate = useNavigate();

    return (
        <Row
            left={<PersonList onClickItem={(id) => navigate(`/people/${id}`)}/>}
            right={<PersonDetails itemId={urlParams.id}/>}
        />
    );
}