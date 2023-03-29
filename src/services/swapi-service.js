import axios from "axios";

export class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await axios(`${this._apiBase}${url}`);

        console.log(res);

        if (res.status !== 200) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }

        return await res.data;
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson = (id) => {
        return this.getResource(`/people/${id}/`);
    }

     getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet = (id) => {
        return this.getResource(`/planets/${id}/`);
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship = (id) => {
        return this.getResource(`/starships/${id}/`);
    }
}

