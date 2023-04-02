import React from "react";

import { withSwapiService } from "../hok-helper";

import { ErrorBoundary } from "../error-boundary";
import { ItemDetails } from "../item-details";
import { Record } from "../record";

const StarshipDetails = ({ itemId, swapiSwrvice }) => {
    const { getStarship, getStarshipImageUrl } = swapiSwrvice;

    return (
        <ErrorBoundary>
            <ItemDetails
                itemId={itemId}
                getData={ getStarship }
                getImageUrl={ getStarshipImageUrl }
            >
                <Record label="Model" field="model" />
                <Record label="Length" field="length" />
                <Record label="Cost" field="costInCredits" />
            </ItemDetails>
        </ErrorBoundary>
    );
};

export default withSwapiService(StarshipDetails);