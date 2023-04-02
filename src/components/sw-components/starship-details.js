import React from "react";

import { withSwapiService } from "../hok-helper";

import { ErrorBoundary } from "../error-boundary";
import { ItemDetails } from "../item-details";
import { Record } from "../record";
import {useParams} from "react-router-dom";

const StarshipDetails = ( props ) => {
    const itemId = useParams();

    return (
        <ErrorBoundary>
            <ItemDetails { ...props} itemId={itemId.id} >
                <Record label="Model" field="model" />
                <Record label="Length" field="length" />
                <Record label="Cost" field="costInCredits" />
            </ItemDetails>
        </ErrorBoundary>
    );
};

const mapMethodsToProps = ({ getStarship, getStarshipImageUrl }) => {
    return {
        getData: getStarship,
        getImageUrl: getStarshipImageUrl
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);