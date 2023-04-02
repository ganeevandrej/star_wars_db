import { withData, withSwapiService } from "../hok-helper";

import { ItemList } from "../item-list";

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped { ...props }>
                { fn }
            </Wrapped>
        );
    }
}

const mapPeopleMethodsToProps = ({ getAllPeople }) => {
    return {
        getData: getAllPeople
    }
}
const mapPlanetsMethodsToProps = ({ getAllPlanets }) => {
    return {
        getData: getAllPlanets
    }
}
const mapStarshipsMethodsToProps = ({ getAllStarships }) => {
    return {
        getData: getAllStarships
    }
}

const renderName = ({ name }) => <span>{ name }</span>;
const renderModelAndName = ({ name, model }) => <span>{name}, ( { model } )</span>;

export const PersonList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    mapPeopleMethodsToProps
);
export const PlanetList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    mapPlanetsMethodsToProps
);
export const StarshipList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderModelAndName)
    ),
    mapStarshipsMethodsToProps
);