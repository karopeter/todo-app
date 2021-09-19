if(1 === 1)  {
   console.log("It's true!");
}


// let rating = 3;

// if (rating === 3) {
//     console.log("YOU ARE A SUPERSTAR!");
// }


// let num = 3;

//  if (num % 2 !== 0) {
//      console.log('ODD NUMBER!');
//  }


 // Performance Review 
 // 3 - superstar 
 // 2 - meet expectations 
 // 1 - need improvement 
 // anything else - wtf?    
//  let rating = 2;

//  if (rating === 3) {
//      console.log('YOU ARE SUPERSTAR');
//  }

//  else if (rating === 2) {
//      console.log('MEETS EXPECTATIONS');
//  }

//  else if (rating === 1) {
//      console.log('NEEDS IMPROVEMENTS');
//  }

//  else {
//      console.log("INVALID RATING");
//  }

 let highScore = 1430;
 let userScore = 1600;

 if (userScore >= highScore) {
     console.log(`Congrats you have the new high score of ${userScore}`);

     highScore = userScore;
 }

 else {
     console.log(`Good Game . Your score of ${userScore} did not beat the high score of ${highScore}`);
 }

//  let password = 'hellokitty';

//  if (password.length >= 6) {
//    if(password.indexOf(' ') === -1) {
//        console.log("Valid password");
//    }
//    else {
//        console.log('Password is long enough, but cannot contain spaces');
//    }
//  }

//  else {
//      console.log("Password must be longer!");
//  }

 let mystery = 5;

 if(mystery) {
     console.log("TRUTHY");
 }

 else {
     console.log("FALSY");
 }

//  let loggedInUser = 'thomas123';

//  if (loggedInUser) {
//      console.log("YOU ARE LOGGED IN");
//  }

// else {
//   console.log("PLEASE LOG IN");
// }

// let password = 'chickenGal';

// if (password.length >= 8 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD");
// }

// else {
//   console.log("INVALID PASSWORD!");
// }


// let num = 1;

// if (num >= 1 && num <= 10) {
//     console.log('Number is between 1 and 10');
// }

// else {
//   console.log("Please guess a number between 1 and 10");
// }

let age = 30;

if (age < 6 || age >= 65) {
    console.log("YOU GET IN FOR FREE");
}

else {
  console.log('YOU MUST PAYYYY!');
}

// let color = 'violet';
// if (color === 'purple' || color === 'lilac' || color === 'violet') {
//     console.log("GREAT CHOICE");
// }


let loggedInUser;

// If there isn't a logged in user
if (!loggedInUser) {
    console.log('GET OUT OF HERE');
}

let flavor = 'watermelon';

if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log('WE DONT HAVE THAT FLAVOR');
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('WE ONLY HAVE GRAPE AND CHERRY!');
}


let day = 2;

// if (day === 1) {
//     console.log('MONDAY');
// }

// else if (day === 2) {
//     console.log('TUESDAY');
// }


// else if (day === 3) {
//     console.log('WEDNESDAY');
// }

// else if (day === 4) {
//     console.log('THURDAY');
// }

// else if (day === 5) {
//     console.log('FRIDAY');
// }

// else if (day === 6) {
//     console.log('SATURDAY');
// }

// else if (day === 7) {
//     console.log('SUNDAY');
// }

// else {
//     console.log('INVALID DAY');
// }

switch (day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
     case 6:
       console.log('SATURDAY');
       break;
    case 7:
        console.log('SUNDAY');
        break;
        default:
            console.log('INVALID DAY'); 
}

let emoji = 'happy face';

switch (emoji) {
    case 'lips':

    case 'happy face':
        console.log('yellow');
        break;
    case 'sad face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
        break;
    case 'lips':
        console.log('red');
        break;
}

let num  = 7;

//  if (num === 7) {
//      console.log('lucky!');
//  }

//  else {
//      console.log('BAD!');
//  }

//  num === 7 ? console.log('lucky!') : console.log('BAD!');

 let status = 'offline';

//  let color;
//  if (status === 'offline') {
//      color = 'red';
//  } 
//  else {
//      color = 'green';
//  }


let color = status === 'offline' ? 'red' : 'green';

 
// Array 
let lotto = [45, 12, 23, 25, 34]

let myCollections = [12, 'dog', true, null, NaN];

 let shoppingList = ['Cheddar Cheese', '2% Milk'];

 shoppingList[1] = 'Whole Milk';
 shoppingList[2] = 'Ice Cream';
 shoppingList[shoppingList.length] = 'Tomatoes';
 shoppingList[shoppingList.length] = 'Potatoes';
 console.log(shoppingList);

 let topSongs = [
     'First Time I ever Saw Your Face',
     'God Only Knows',
     'A Day In The Life',
     'Life On Mars'
 ];

 topSongs.push('Fortunate Son');
 console.log(topSongs);

 let dishesToDo = ['big platter'];
 dishesToDo.unshift('large plate');
 dishesToDo.unshift('small plate');
 dishesToDo.unshift('cereal bowl');
 dishesToDo.unshift('mug');
 dishesToDo.unshift('dirty spoon');
 dishesToDo.shift();
 dishesToDo.shift();

 dishesToDo.unshift('fork', 'knife')
 dishesToDo.unshift('small spoon');
 dishesToDo.unshift('large spoon');
 console.log(dishesToDo);

 let fruits = [ 'apple', 'bananna'];
 let veggies = ['asparagus', 'brussel sprouts'];
 let meats = [ 'steak', 'chicken breast'];

 console.log(fruits.concat(veggies));
 console.log(veggies.concat(fruits));

 let allFoods = fruits.concat(veggies, meats);
 console.log(allFoods);



 let ingredients = [
     'water',
     'corn starch',
     'flour',
     'cheese',
     'brown sugar',
     'shrimp',
     'eel',
     'butter'
 ];

 if (ingredients.includes('flour')) {
     console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
 }

 let letters = ['T', 'C', 'E', 'P', 'S', 'E'];

 letters.join('&')
 letters.reverse().join('.')
 console.log(letters);



//  let swimmers = animals.slice(0, 3);

//  let mammals = animals.slice(2, 4);

//  let reptiles = animals.slice(4, 6);

//  let quadruped = animals.slice(-3);
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortise'];

 animals.splice(1,0, 'octopus');
 animals.splice(3,2);
 animals.splice(3,0, 'snake', 'frog');
 animals.splice(0,2, 'SHARK!', 'OCTOPUS!');

 console.log(animals);
//  console.log(swimmers);
//  console.log(mammals);
//  console.log(reptiles);
//  console.log(quadruped);

let people = ['Mrs Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
let number = [34, 10, 100000, 67, 99];


people.sort();
number.sort();
console.log(number);
console.log(people);

const animalPairs = [
    ['doe', ['buck', 'stag'] ],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];


animalPairs[0][1] = 'stag';
console.log(animalPairs);


// Objects 
const fitBitData =  {
    totalStep: 308727,
    totalMiles: 211.7,
    avgCaloriesBurn: 5755,
    workoutThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

const numbers = {
  100: 'one hundred',
  16: 'sixteen'
};

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

let mysteryColor = 'yellow';

palette[mysteryColor];

const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: [ 'music', 'Art' ],
    exams: {
        midterm: 92,
        final: 88
    }
};

const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1
      },
      {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
      },
      {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 9
      }
];

const game = {
    player1: {
        username: 'Blue',
        playingAs: 'X'
    },
    player2: {
       username: 'Muffins',
       playingAs: 'O'
    },
    board: [ ['O', null, 'X', ], [ 'X', 'O', 'X' ], [null, 'O', 'X']],
};

const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notification: []
};

if (user.notification.length === 0) {
    console.log('NO NEW NOTIFICATION!');
}

console.log(fitBitData);
console.log(numbers);
console.log(palette);
console.log(userReviews);
console.log(student);
console.log(avg);
console.log(shoppingCart);
console.log(game); 

// For Loop
// for (let i = 5; i <= 10; i++) {
//     console.log('HELLO:', i);
// }

// for (let i = 1; i <= 10; i +=3) {
//     console.log('HELLO:', i);
// }


for (let num = 1; num <= 20; num++) {
    console.log(`${num}x${num} = ${num * num}`);
}

for (let i = 200; i >= 0; i -= 25) {
    console.log(i);
}

const examScores = [98, 77, 84, 91, 57, 66 ];

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
}

const myStudents = [
    {
      firstName: 'Zeus',
      grade: 86
    }, 
    {
      firstName: 'Artemis',
      grade: 97
    },
    {
     firstName: 'Hera',
     grade: 72
    },
    {
     firstName: 'Apollo',
     grade: 90
    }
];
// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     console.log(`${student.firstName} scored ${student.grade}`);
// };

// let total = 0;

// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     total += student.grade;
// }

// console.log(total / myStudents.length);

const word = 'stressed';
let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(reversedWord);

const gameBoard = [
   [ 4, 32, 8, 4 ],
   [ 64, 8, 32, 2 ],
   [8, 32, 16, 4 ],
   [ 2, 8, 4, 2 ]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++) {
       totalScore += row[j];
    }
}

// for (let i = 1; i <= 10; i++) {
//     console.log('OUTER LOOP:', i);
//     for(let j = 10; j >= 0; j-=2) {
//         console.log('INNER LOOP:', j);
//     }
// }

// While Loop
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(guess !== target) {
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }

// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!!`);

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (true) {
    if (target === guess) break;
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRAT YOU WIN!`);


let subreddits = [ 'soccer', 'popheads', 'cringe', 'books'];

for (let i = 0; i< subreddits.length; i++) {
    console.log(subreddits[i]);
}

for(let sub of subreddits) {
    console.log(sub);
}

for (let char of 'cockadoodledo') {
    console.log(char.toUpperCase());
}

const magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1],
    [ 4, 3, 8 ]
];

// for (let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for (let j = 0; j < row.length; j++) {
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}
 

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i<words1.length;i++) {
    console.log(`${words1[i]}${words2[i]}`);
}

const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5
};

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}

// const ratings = Object.values(movieReviews);
// let total = 0; 
// for (let r of ratings) {
//     total += r;
// }

// let min = total /  ratings.length;
// console.log(min);

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 3000000,
    tournamentOfChampions: 5000000,
    battleOfTheDDecades: 100000
};

for (let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

let total = 0;
for (let prop in jeopardyWinnings) {
   total += jeopardyWinnings[prop];
}

console.log(`Ken Jennings Total Earnings: ${total}`);
