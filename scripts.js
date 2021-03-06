const numbers = (numberA, numberB) => console.log(`Número a es ${numberA} y número b es ${numberB}`);
const fruits = ['Banana', 'Strawberry', 'Orange'];
const car = {carName: 'Mazda 6', itv: [2015, 2011, 2020] }


numbers();
numbers(10);
numbers(10, 5);

console.log('---------');
const game = {title: 'The last us 2', genre: ['action', 'zombie', 'survival'], year: 2020};

const { title, genre, year} = game;
console.log(title, genre, year);

const [ fruit1, fruit2, fruit3 ] = fruits;
console.log(fruit1, fruit2, fruit3);

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const { name, race } = animalFunction();
console.log(name, race);

const { carName, itv } = car;
const [ year1, year2, year3 ] = itv;
console.log(carName, itv);
console.log(year1, year2, year3);

console.log('---------');

const pointsList = [32, 54, 21, 64, 75, 43];

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const pointsList3 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newPointsList = [ ...pointsList ];
console.log(newPointsList);

const newToy = { ...toy };
console.log(newToy);

const newPointsList2 = [ ...pointsList3, ...pointsLis2];
console.log(newPointsList2);

const newToy2 = { ...toy2, ...toyUpdate };
console.log(newToy2);

const [ color1, , color3, color4, color5 ] = colors;
const newColors = [color1, color3, color4, color5];
console.log(newColors);

console.log('---------');

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const usersName = users.map( (user) => user.name );
console.log(usersName);

const changeUsersName = users.map( (user) => {
    let firstLetter = user.name.charAt(0);
    if (firstLetter === 'A') {
        user.name = 'Anacleto';
    }

    return user.name;
});

console.log(changeUsersName);

const visitedCities = cities.map( (city) => {

    if(city.isVisited === true) {
        city.name = `${city.name} -> visitado`;
    }

    return city.name;
});

console.log(visitedCities);

console.log('---------');

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

const overEighteen = ages.filter( age => age >= 18 );
console.log(overEighteen);

const evenAges = ages.filter( age => age % 2 === 0 );
console.log(evenAges);

const leagueOfLegends = streamers.filter( streamer => streamer.gameMorePlayed === 'League of Legends' );
console.log(leagueOfLegends);

const includesU = streamers.filter( streamer => streamer.name.includes('u'));
console.log(includesU);

const includesLegends = streamers.filter( streamer => {
    let streamerName = streamer.name;
    if (streamer.gameMorePlayed.includes('Legends')) {
        if (streamer.age > 35) {
            streamerName.toUpperCase();
        };

        return streamerName;
    }
});

console.log(includesLegends);

const input = document.querySelector('[data-function="toFilterStreamers"]');
const button = document.querySelector('[data-function="toShowFilterStreamers"]');

function getFiltered() {
    value = input.value.toLowerCase();
    let result = streamers.filter( streamer => {
        let streamerName = streamer.name.toLowerCase();
        return streamerName.includes(value);
    });
    console.log(result);
    return result;
} 

input.addEventListener('input', getFiltered);
button.addEventListener('click', getFiltered);

console.log('---------');

const numbers2 = [32, 21, 63, 95, 100, 67, 43];
const movies2 = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const foundNumbers = numbers2.find( number => number === 100 );
console.log(foundNumbers);

const foundMovie = movies2.find( movie => movie.date === 2010 );
console.log(foundMovie);

const foundAlien = aliens.find( alien => alien.name === 'Cucushumushu' );
const foundMutation = mutations.find( mutation => mutation.name === 'Porompompero' );

const mutation = { mutation: foundMutation };
const newAlien = { ...foundAlien, ...mutation };
console.log(newAlien);

console.log('---------');

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sum = exams.reduce( (total, alumn) => total + alumn.score, 0 );
console.log(sum);

const sumPassedAlumns = exams.reduce( (total, alumn) => {
    if (alumn.score >= 5) {
        return total + alumn.score;
    } else {
        return total;
    }
}, 0 );
console.log(sumPassedAlumns);

let alumnsNumber = exams.length;

function getAverage() {
    const scoresTotal = exams.reduce( (total, alumn) => {
        return total + alumn.score ;
    }, 0 );

    return scoresTotal / alumnsNumber;
}

console.log(getAverage());