import React from "react";

import { withSwapiService } from "../hok-helper";

import { ErrorBoundary } from "../error-boundary";
import { ItemDetails } from "../item-details";
import { Record } from "../record";

const PersonDetails = ({ itemId, swapiSwrvice }) => {
    const { getPerson, getPersonImageUrl } = swapiSwrvice;

    return (
        <ErrorBoundary>
            <ItemDetails
                itemId={itemId}
                getData={ getPerson }
                getImageUrl={ getPersonImageUrl }
            >
                <Record label="Gender" field="gender"/>
                <Record label="Eye Color" field="eyeColor"/>
            </ItemDetails>
        </ErrorBoundary>
    );
};

export default withSwapiService(PersonDetails);