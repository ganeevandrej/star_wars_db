import React from "react";

import { withSwapiService } from "../hok-helper";

import { ErrorBoundary } from "../error-boundary";
import ItemDetails from "../item-details";
import { Record } from "../record";

const PlanetDetails = ( props ) => {
    return (
        <ErrorBoundary>
            <ItemDetails { ...props }>
                <Record label="Population" field="population" />
                <Record label="Rotation Period" field="rotationPeriod" />
                <Record label="Diameter" field="diameter" />
            </ItemDetails>
        </ErrorBoundary>
    );
};

const mapMethodsToProps = ({ getPlanet, getPlanetImageUrl }) => {
    return {
        getData: getPlanet,
        getImageUrl: getPlanetImageUrl
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);