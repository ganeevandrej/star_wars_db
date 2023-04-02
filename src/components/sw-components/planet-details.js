import React from "react";

import { withSwapiService } from "../hok-helper";

import { ErrorBoundary } from "../error-boundary";
import { ItemDetails } from "../item-details";
import { Record } from "../record";

const PlanetDetails = ({ itemId, swapiSwrvice }) => {
    const { getPlanet, getPlanetImageUrl } = swapiSwrvice;

    return (
        <ErrorBoundary>
            <ItemDetails
                itemId={itemId}
                getData={ getPlanet }
                getImageUrl={ getPlanetImageUrl }
            >
                <Record label="Population" field="population" />
                <Record label="Rotation Period" field="rotationPeriod" />
                <Record label="Diameter" field="diameter" />
            </ItemDetails>
        </ErrorBoundary>
    );
};

export default withSwapiService(PlanetDetails);