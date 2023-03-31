import { withData } from "../hok-helper/withData";

import { ItemList } from "../item-list";
import { SwapiService } from "../../services/swapi-service";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped { ...props }>
                { fn }
            </Wrapped>
        );
    }
}

const renderName = ({ name }) => <span>{ name }</span>;
const renderModelAndName = ({ name, model }) => <span>{name}, ( { model } )</span>;

export const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
export const PlanetList = withData(ItemList, getAllPlanets);
export const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarships);