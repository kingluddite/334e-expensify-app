// const person = {
//   // name: 'Phil',
//   age: 21,
//   location: {
//     city: 'LA',
//     temp: 70,
//   },
// };
// const { name: firstName = 'anon', age } = person;
// const { city, temp: temperature } = person.location;
// console.log(`${firstName} is ${age}.`);
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'All Quiet on the Western Back',
//   author: 'Some dude',
//   publisher: {
//     name: 'Yoyo',
//   },
// };
//
// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(publisherName);

// const [player, coach, fan = 'none'] = ['kobe', 'jose m'];
// console.log(`I am the player ${player}`);
// console.log(`I am the coach ${coach}`);
// console.log(`I am the fan ${fan}`);

const item = ['Coffee (hot)', '$1.00', '$2.00', '$3.00'];
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}.`);
