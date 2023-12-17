import axios from 'axios';

export class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _baseUrlImage = 'https://starwars-visualguide.com/assets/img';

  async getResource(url) {
    const res = await axios(`${this._apiBase}${url}`);

    if (res.status !== 200) {
      throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
    }

    return await res.data;
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const res = await this.getResource(`/people/${id}/`);
    return this._transformPerson(res);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const res = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(res);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const res = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(res);
  };

  getPersonImageUrl = ({id}) => {
    return `${this._baseUrlImage}/characters/${id}.jpg`;
  };

  getPlanetImageUrl = ({id}) => {
    return `${this._baseUrlImage}/planets/${id}.jpg`;
  };

  getStarshipImageUrl = ({id}) => {
    return `${this._baseUrlImage}/starships/${id}.jpg`;
  };

  _extractId = (url) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet.url),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,

    };
  };
}
