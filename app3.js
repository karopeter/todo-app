function grumpus() {
    console.log('ugh...you again...');
    console.log('FOR THE LAST TIME...');
    console.log('LEAVE ME ALONE!!');
}

grumpus();

// for (let i = 0; i < 50; i++) {
//     grumpus();
// }

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        rollDie();
    } 
}

throwDice(9);

function greet(nickname) {
    console.log(`Hi, ${nickname}!`);
}

greet('jonas');

function square(num) {
  console.log(num * num);
}

square();

function sum(x, y) {
  console.log(x + y);
}

sum();

// function isPurple(color) {
//   if(color.toLowerCase() === 'purple') {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// isPurple('purple');

// Boolean expression
// function isPurple(color) {
//   return color.toLowerCase() === 'purple';
// }

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
};

containsPurple(['blue', 'pink', 'magenta']);


// First approach
// function isValidPassword(password, username) {
//     if (passowrd.length < 8) {
//       return false;
//     }
//     if (password.indexOf(' ') !== -1) {
//       return false;
//     }
//     if (password.indexOf(username) !== -1) {
//       return false;
//     }
//     return true;
// } 


// Second Approach
// function isValidPassword(password, username) {
//   if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// Third Approach
// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(' ') !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (!tooShort && !hasSpace && !tooSimilar) return true;
//   return false;
// }

// Fourth Approach 
function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooShort && !hasSpace && !tooSimilar;
}


// write a function to find the average value in an array of numbers
// avg([0, 50]) // 25
// avg([75,76,80,95,100]) // 85.2

function avg(arr) {
  let total = 0;
  // loop over each num
  for (let num of arr) {
    // add them together
    total += num;
  }
  // divide by number of nums
  let res = total / arr.length;
  return res;
}

// A pangram is a sentence that contains every letters of the alphabet, like;
// "The quick brown fox jumps over the laze dog"
//Write  a function called isPangram, which check to see if a given sentence contains every letter of the alphabet. Make sure ignore string casing!
// isPangram('The five boxing wizard jump quickly') // true
// isPangram('The five boxing wizard jump quick') // false
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//      if (lowerCased.indexOf(char) === -1) {
//        return false;
//      }
//   }
//   return true;
// }

function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
     if (!lowerCased.includes(char)) {
       return false;
     }
  }
  return true;
}



// write a getCard() function which return a random playing card object, like:
// {
//    value: 'K'
//    suit: 'clubs'
// }
// Pick a random value from:
//-------1,2,3,4,5,6,7,8,9,10,JQ,K,A
//Pick a random suit from: 
//------clubs, spades, hearts, diamonds 
// Return both in an object


function getCard() {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const valIdx = Math.floor(Math.random() * values.legnth);

  const value =  values[valIdx];

  const suits =  ['clubs', 'spades', 'hearts', 'diamonds'];

  const suitIdx = Math.floor(Math.random() * suits.length);

  const suit = suits[suitIdx];
  return { value: value, suit: suit };
}

getCard();

function lol() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
  console.log(age);
}

function changeColor() {
  let color = 'purple';
  const age = 19;
  console.log(age);
}

lol();
changeColor();


let bird = 'mandarin duck';

function birdWatch() {
  let bird = 'golden pheasant';
  console.log(bird);
}

birdWatch();
console.log(bird);


// Block Scope
// if (true) {
//   var animal = 'eel';
//   console.log(animal);
// }

// console.log(animal);

let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
let i = 10;
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals);
}

console.log(i);

function doubleArr(arr) {
  const reuslt = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  return result;
}

function outer() {
  let movie = 'Amadeus';

  function inner() {
    // let movie = 'The Shinning'
    function extraInner() {
      console.log(movie.toUpperCase())
    }
    extraInner();
  }
  inner();
}

outer();


// function add(x, y) {
//   return x + y;
// }

// const sums = function (x, y) {
//   return x + y;
// }

// console.dir(sums);
// console.dir(add);

function add(x, y) {
  return x + y;
}


const subtract = function (x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
   return x / y;
}

const operations = [add, subtract, multiply, divide]; 


for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

function callThreeTimes(f) {
   f();
   f();
   f();
}

function cry() {
  console.log("BOO I'M SO SAD!");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

cry();
callThreeTimes(cry);
callThreeTimes(rage);

function repeatNTimes(action, num) {
  for(let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 13);

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

pickOne(cry, rage);

function multiplyBy(num) {
  return function (x) {
    return x * num;
  }
}

const tripple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

function makeBetweenFunc(x, y) {
  return function(num) {
   return num >= x && num <= y;
  }
}
const isChild = makeBetweenFunc(0, 18);

const isInNineties = makeBetweenFunc(1990, 1999);

const isNiceWeather = makeBetweenFunc(60, 79);

console.log(isChild);


// forEach
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function(num) {
//    console.log(num * 2);
// });


// function printTripple(n) {
//   console.log(n * 3);
// }

// numbers.forEach(printTripple);

// numbers.forEach(function (num, idx) {
//   console.log(idx, num);
// });

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
   {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
   },
  {
   title: 'Bone: The complete Edition',
   authors: ['Jeff Smith'],
   rating: 4.42,
   genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
   title: 'American Gods',
   authors: ['Neil Gaiman'],
   rating: 4.11,
   genres: ['fiction', 'fantasy']
  },
  {
   title: 'A Gentleman in Moscow',
   authors: ['Amor Towles'],
   rating: 4.36,
   genres: ['fiction', 'historical fiction']
  }, 
  {
    title: 'The Name of the wind',
    authors: ['patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
   title: 'The Overstory',
   authors: ['Richard Powers'],
   rating: 4.19,
   genres: ['fiction', 'short stories']
  },
  {
   title: 'The Way of Kings',
   authors: ['Brandon Sanderson'],
   rating: 4.65,
   genres: ['fantasy', 'epic']
  },
  {
   title: 'Lord of the flies',
   authors: ['William Golding'],
   rating: 3.67,
   genres: ['fiction']
  }
];

const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})

console.log(groupedByRatings);

const goodBooks = books.filter(b => b.rating > 4.3);

const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
));

const shortForm = books.filter(book => (
  book.genres.includes('short stories') || 
  book.genres.includes('essays')
));

const query = '';
// const results = books.filter(book => {
//   const title = book.title.toLowerCase();
//   return title.includes(query.toLowerCase())
// });

const allGoodBooks = books.every(book => book.rating > 3.5);

const any2Authors = books.some(book => book.authors.length === 2);

console.log(goodBooks);
console.log(fantasyBooks);
console.log(shortForm);
console.log(allGoodBooks); 
console.log(any2Authors);

// books.forEach(function(book) {
//    console.log(book.title.toUpperCase());
// });

// const titles = books.map(function(b) {
//     return b.title;
// });

// console.log(titles);

// const goodBook = books.find(b => b.rating >= 4.3);
// const neilBook = books.find(b => (b.authors.includes('Neil Gaiman')));  

// console.log(goodBook);
// console.log(neilBook);

// Map
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num) {
    return num * 2;
});

console.log(doubles);

const numDetail = numbers.map(function(n) {
   return {
     value: n,
     isEven: n % 2 === 0
   }
});

console.log(numDetail);

const abbrevs = words.map(function(word) {
  return word.toUpperCase().split('').join('.');
});

console.log(abbrevs);

// Arrow Functions
const circle = (x) => {
  return x * x;
};

const isEven = (num) => {
  return num % 2 === 0;
}
console.log(isEven);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const doubles1 = nums.map(n => {
//   return n * 2;
// });
// console.log(doubles1);

// // const parityList = nums.map((n) => {
// //    if (n % 2 === 0) return 'even';
// //    return 'odd';
// // });

// const parityList = nums.map((n) => (
//   n % 2 === 0 ? 'even' : 'odd'
// ));
// console.log(parityList);


let films = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs . Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds'
];

const film = films.find(film => {
  return film.includes('Mrs');
});
console.log(film);

const film2 = films.find(f => (
  f.indexOf('Mrs') === 0
));
console.log(film2);

// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter(n => n % 2 === 1);
// const evens = nums.filter(n => n % 2 === 0);
// const bigNums = nums.filter(n => n > 50);

// console.log(odds);
// console.log(evens);
// console.log(bigNums);

const statements = ['dog', 'dig', 'log', 'bag', 'wag'];

const all3Lets = statements.every(statement => statement.length === 3);

const allEndInG = statements.every(statement => {
  const last = statement.length - 1;
  return statement[last] === 'g';
});

const someStartWithD = statements.some(statement => statement[0] === 'd');
const allStartWithD = statements.every(statement => statement[0] === 'd');

console.log(all3Lets);
console.log(allEndInG);
console.log(someStartWithD);
console.log(allStartWithD);

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

prices.sort();

const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b -a);

console.log(ascSort);
console.log(descSort);

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
})

console.log(product);

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const maxGrade = grades.reduce((max, currVal) => {
//     if (currVal > max) return currVal;
//     return max;
// });

const maxGrade = grades.reduce((max, currVal) => {
   return Math.max(max, currVal);
});
 
const minGrade = grades.reduce((min, currVal) => (
  Math.min(min, currVal)
));

console.log(maxGrade);
console.log(minGrade);

// const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
//   return sum + currVal;
// });

// console.log(sum);

const votes = ['y', 'absent', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// const results = votes.reduce((tally, val) => {
//    if (tally[val]) {
//      tally[val]++
//    } else {
//      tally[val] = 1;
//    } 
//    return tally;
// }, {});

const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});

console.log(results);
