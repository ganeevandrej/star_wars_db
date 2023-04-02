import React from "react";

import { withSwapiService } from "../hok-helper";

import { ErrorBoundary } from "../error-boundary";
import { ItemDetails } from "../item-details";
import { Record } from "../record";

const StarshipDetails = ( props ) => {
    return (
        <ErrorBoundary>
            <ItemDetails { ...props }>
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

export default withSwapiService(StarshipDetails, mapMethodsToProps);