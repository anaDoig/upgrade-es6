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