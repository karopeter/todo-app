function multiply(x, y) {
    if (typeof y === 'undefined') {
        y = 1;
    }
    return x * y;
};

const greet = (person, greeting = 'hi', punctuation = '!') => {
    console.log(`${greeting}, ${person} ${punctuation}`)
}

greet('anya');
console.log(greet);

function giveMeFour(a, b, c, d) {
    console.log('a', a)
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

giveMeFour(4,5,6,7);


const colors = ['red', 'orange', 'yellow', 'green'];

giveMeFour(...colors);

// Spread in Array
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly', ];

const mollusca = [...cephalopods, ...gastropods];

const invert = [...cnidaria, ...gastropods, ...cephalopods];


console.log(mollusca);

console.log(invert);


const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
   family: 'Caninae',
   furry: true,
   legs: 4
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
};
console.log(dog);

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
};

console.log(houseCat);


const catDog = {
    ...canine,
    ...feline
};

console.log(catDog);

const tripod = {
    legs: 3,
    ...canine
    
};

console.log(tripod);

const catDogClone = {
    ...catDog
};
console.log(catDogClone);

const random = [...'hello', {
    ...catDog
}];
console.log(random);

// Arguments Objects
// `function sum() {
//     const argsArr = [...arguments]
//     return argsArr.reduce((total, currVal) => {
//         return total + currVal
//     })
// };`

function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

sum(4,5,6,7);

function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
};

fullName('Jonas', 'Schemdtmen', 'III', 'order for new javascrip functions');

// const multiply = (...nums) => (
//     nums.reduce((total, currVal) => total * currVal)
// );

// Dstructuring Array
const raceResults = [
    'Eluid Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward' 
];

const [gold, silver, broonze] = raceResults;
const [first, , , fourth] = raceResults;
const [winner, ...others] = raceResults;

console.log(raceResults);

const runner = {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden heart of kenya'
};

function print(person) {
    const {
        first,
        last,
        title
    } = person;
    console.log(`${first} ${last}, ${title}`)
};

print(runner);

const {
    country: nation,
    title: honorofic
} = runner;

console.log(honorofic);

// const {
//     first,
//     last,
//     ...other
// } = runner;

// console.log(other);

const results = [
    {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya'
},
{
  first: 'Feyisa',
  last: 'Lilesa',
  country: 'Ethiopia'
},
{
  first: 'Galen',
  last: 'Rupp',
  country: 'United States'
}
]

const [{first: goldWinner}, {country}] = results;
console.log(country);
console.log(goldWinner);


const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
};

parseResponse(response);


const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.max(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

console.log(stats);

// Computed Properties
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// const team = {};
// team[role] = person;
// team[role2] = person2;

const team  = {
    [role]: person,
    [role2]: person2,
    [1 + 6 + 9]: 'sixteen'
}

console.log(team);

// function addProp(obj, k, v) {
//     const copy = {
//         ...obj
//     };
//     copy[k] = v;
//     return copy;
// }

const addProp = (obj, k, v) => {
    return {
        ...obj,
        [k]: v
    } 
}

const res = addProp(team, 'happy', ':)')

console.log(res);

const math = {
    numbers: [1, 2, 3, 4, 5],
    add: function (x, y) {
        return x + y;
    },
    multiply: function (x, y) {
        return x * y;
    }
}

console.log(math);

const auth = {
    username: 'TommyBot',
    login() {
       console.log('LOGGED YOU IN!');
    },
    logout() {
        console.log('GOODBYE!');
    }
}

console.log(auth);

// const information  = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//     console.log(`${this.first} ${this.last} AKA ${this.nickName}`)
//     }
// }

const information  = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
    const {
        first,
        last,
        nickName
    } = this;
    return `${this.first} ${this.last} AKA ${this.nickName}`;
    },
    printBio() {
       const fullName = this.fullName();
       console.log(`${fullName} is a person!`)
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHA`)
      }
}


information.fullName();
information.printBio();

// const annoyer = {
//     phrases: ['literally', 'cray cray', 'I cant even', 'Totes!', 'YOLO', 'Cant Stop, Wont Stop'],
//     pickPhrase() {
//         const {
//           phrases 
//         } = this;
//         const idx = Math.floor(Math.random() * phrases.length);
//         return phrases[idx]
//     },
//     start() {
//       this.timerId = setInterval(() => {
//           console.log(this.pickPharse())
//       }, 3000);
//     },
//     stop() {
//         clearInterval(this.timerId);
//         console.log('PHEW THANK HEAVENS THAT IS OVER!')
//     }
// }

// console.log(annoyer);
// annoyer.start()

function makeDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
};



makeDeck();

function drawCard(deck) {
    return deck.pop()
}

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

// console.log(card1);

const myDeck = {
   deck: [],
   drawnCards: [],
   suits: ['hearts', 'diamonds', 'spades', 'clubs'],
   values: values = '2,3,4,5,6,7,8,9,10,J,Q,K,A',
   initializeDeck() {
       const {
        suits,
        values,
        deck
       } = this;
       for (let value of values.split(',')) {
           for (let suit of suits) {
               deck.push({
                   value,
                   split
               })
           }
       }
       return deck;
   },
   drawCard() {
    const card =  this.deck.pop();
    this.drawnCards.push(card);
    return card;
   },
   drawMultiple(numCards) {
       const cards = [];
      for (let i = 0; i <numCards; i++) {
          cards.push(this.drawCard());
      }
      return cards;
   },
   shuffle() {
       const {
           deck
       } = this;
    // Loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
        // pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        // swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
 }
}





console.log(myDeck);




