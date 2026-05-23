export class DummySwapiService {
  _publicUrl = process.env.PUBLIC_URL || '';
  _assetBaseUrl = `${this._publicUrl}/assets`;
  _fallbackImageBaseUrl = 'https://starwars-visualguide.com/assets/img';

  _people = [
    {
      id: 1,
      name: 'Luke Skywalker',
      gender: 'male',
      birthYear: '19BBY',
      eyeColor: 'blue',
      image: 'people/Luke_Skywalker.jpg',
    },
    {
      id: 2,
      name: 'Leia Organa',
      gender: 'female',
      birthYear: '19BBY',
      eyeColor: 'brown',
      image: 'people/Leia_Organa.jpg',
    },
    {
      id: 3,
      name: 'Han Solo',
      gender: 'male',
      birthYear: '29BBY',
      eyeColor: 'brown',
      image: 'people/Han_Solo.jpg',
    },
    {
      id: 4,
      name: 'Darth Vader',
      gender: 'male',
      birthYear: '41.9BBY',
      eyeColor: 'yellow',
      image: 'people/Darth_Vader.jpg',
    },
    {
      id: 5,
      name: 'Obi-Wan Kenobi',
      gender: 'male',
      birthYear: '57BBY',
      eyeColor: 'blue-gray',
      image: 'people/Obi-Wan_Kenobi.jpg',
    },
    {
      id: 6,
      name: 'Yoda',
      gender: 'male',
      birthYear: '896BBY',
      eyeColor: 'brown',
      image: 'people/Yoda.jpg',
    },
    {
      id: 7,
      name: 'R2-D2',
      gender: 'n/a',
      birthYear: '33BBY',
      eyeColor: 'red',
      image: 'people/R2-D2.jpg',
    },
    {
      id: 8,
      name: 'C-3PO',
      gender: 'n/a',
      birthYear: '112BBY',
      eyeColor: 'yellow',
      image: 'people/C-3PO.jpg',
    },
    {
      id: 9,
      name: 'Chewbacca',
      gender: 'male',
      birthYear: '200BBY',
      eyeColor: 'blue',
      image: 'people/Chewbacca.jpg',
    },
    {
      id: 10,
      name: 'Padme Amidala',
      gender: 'female',
      birthYear: '46BBY',
      eyeColor: 'brown',
      image: 'people/Padme_Amidala.png',
    },
  ];

  _planets = [
    {
      id: 1,
      name: 'Tatooine',
      population: '200000',
      rotationPeriod: '23',
      diameter: '10465',
      image: 'planets/Tatooine.jpg',
    },
    {
      id: 2,
      name: 'Alderaan',
      population: '2000000000',
      rotationPeriod: '24',
      diameter: '12500',
      image: 'planets/Alderaan.png',
    },
    {
      id: 3,
      name: 'Naboo',
      population: '4500000000',
      rotationPeriod: '26',
      diameter: '12120',
      image: 'planets/Naboo.jpg',
    },
    {
      id: 4,
      name: 'Hoth',
      population: 'unknown',
      rotationPeriod: '23',
      diameter: '7200',
      image: 'planets/Hoth.jpg',
    },
    {
      id: 5,
      name: 'Dagobah',
      population: 'unknown',
      rotationPeriod: '23',
      diameter: '8900',
      image: 'planets/Dagobah.jpg',
    },
    {
      id: 6,
      name: 'Bespin',
      population: '6000000',
      rotationPeriod: '12',
      diameter: '118000',
      image: 'planets/Bespin.jpg',
    },
    {
      id: 7,
      name: 'Endor',
      population: '30000000',
      rotationPeriod: '18',
      diameter: '4900',
      image: 'planets/Endor.jpg',
    },
    {
      id: 8,
      name: 'Coruscant',
      population: '1000000000000',
      rotationPeriod: '24',
      diameter: '12240',
      image: 'planets/Coruscant.jpg',
    },
    {
      id: 9,
      name: 'Kamino',
      population: '1000000000',
      rotationPeriod: '27',
      diameter: '19720',
      image: 'planets/Kamino.jpg',
    },
    {
      id: 10,
      name: 'Mustafar',
      population: '20000',
      rotationPeriod: '36',
      diameter: '4200',
      image: 'planets/Mustafar.jpg',
    },
  ];

  _starships = [
    {
      id: 1,
      name: 'X-wing',
      model: 'T-65B X-wing',
      manufacturer: 'Incom Corporation',
      costInCredits: '149999',
      length: '12.5',
      crew: 1,
      passengers: 0,
      cargoCapacity: '110',
      image: 'starships/X-wing.jpeg',
    },
    {
      id: 2,
      name: 'TIE Advanced x1',
      model: 'Twin Ion Engine Advanced x1',
      manufacturer: 'Sienar Fleet Systems',
      costInCredits: 'unknown',
      length: '9.2',
      crew: 1,
      passengers: 0,
      cargoCapacity: '150',
      image: 'starships/TIE_Advanced_x1.jpg',
    },
    {
      id: 3,
      name: 'Millennium Falcon',
      model: 'YT-1300 light freighter',
      manufacturer: 'Corellian Engineering Corporation',
      costInCredits: '100000',
      length: '34.37',
      crew: 4,
      passengers: 6,
      cargoCapacity: '100000',
      image: 'starships/Millennium_Falcon.jpg',
    },
    {
      id: 4,
      name: 'Star Destroyer',
      model: 'Imperial I-class Star Destroyer',
      manufacturer: 'Kuat Drive Yards',
      costInCredits: '150000000',
      length: '1600',
      crew: 47060,
      passengers: 0,
      cargoCapacity: '36000000',
      image: 'starships/Star_Destroyer.jpg',
    },
    {
      id: 5,
      name: 'Slave I',
      model: 'Firespray-31-class patrol craft',
      manufacturer: 'Kuat Systems Engineering',
      costInCredits: 'unknown',
      length: '21.5',
      crew: 1,
      passengers: 6,
      cargoCapacity: '70000',
      image: 'starships/Slave_I.jpg',
    },
    {
      id: 6,
      name: 'A-wing',
      model: 'RZ-1 A-wing interceptor',
      manufacturer: 'Alliance Underground Engineering',
      costInCredits: '175000',
      length: '9.6',
      crew: 1,
      passengers: 0,
      cargoCapacity: '40',
      image: 'starships/A-wing.jpg',
    },
    {
      id: 7,
      name: 'Executor',
      model: 'Executor-class star dreadnought',
      manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
      costInCredits: '1143350000',
      length: '19000',
      crew: 279144,
      passengers: 38000,
      cargoCapacity: '250000000',
      image: 'starships/Executor.jpg',
    },
    {
      id: 8,
      name: 'Naboo Starfighter',
      model: 'N-1 starfighter',
      manufacturer: 'Theed Palace Space Vessel Engineering Corps',
      costInCredits: '200000',
      length: '11',
      crew: 1,
      passengers: 0,
      cargoCapacity: '65',
      image: 'starships/Naboo_Starfighter.jpg',
    },
    {
      id: 9,
      name: 'Jedi Interceptor',
      model: 'Eta-2 Actis-class interceptor',
      manufacturer: 'Kuat Systems Engineering',
      costInCredits: '320000',
      length: '5.47',
      crew: 1,
      passengers: 0,
      cargoCapacity: '60',
      image: 'starships/Jedi_Interceptor.jpg',
    },
    {
      id: 10,
      name: 'Republic Cruiser',
      model: 'Consular-class cruiser',
      manufacturer: 'Corellian Engineering Corporation',
      costInCredits: 'unknown',
      length: '115',
      crew: 9,
      passengers: 16,
      cargoCapacity: 'unknown',
      image: 'starships/Republic_Cruiser.jpg',
    },
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async (id) => {
    return this._findById(this._people, id);
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async (id) => {
    return this._findById(this._planets, id);
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async (id) => {
    return this._findById(this._starships, id);
  };

  getPersonImageUrl = (item) => {
    return this._getImageUrl('characters', item, item.image);
  };

  getStarshipImageUrl = (item) => {
    return this._getImageUrl('starships', item, item.image);
  };

  getPlanetImageUrl = (item) => {
    return this._getImageUrl('planets', item, item.image);
  };

  _findById = (collection, id) => {
    return collection.find((item) => item.id === Number(id));
  };

  _getImageUrl = (fallbackCategory, item, assetPath) => {
    if (assetPath) {
      return `${this._assetBaseUrl}/${assetPath}`;
    }

    return `${this._fallbackImageBaseUrl}/${fallbackCategory}/${item.id}.jpg`;
  };
}
