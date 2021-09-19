function takeShower() {
  return "Showering!"
}

function eatBreakfase() {
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake']
  return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
 takeShower()
 eatBreakfast()
 console.log('Ok ready to go to work!');
}

wakeup();

// Recursive 
// function countDown(num) {
//     for(var i = num; i > 0; i--) {
//       console.log(i);
//     }
//     console.log('All done!');
// }
//Recursively
function countDown(num) {
  if(num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
//print 3
//countDown(2)
//print 2
//countDown(1)
//print 1
//countDown(0)
//print "All Done"
countDown(5);

// our second recursive function
function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
}
sumRange(4);

// facotorial iteratively
// function factorial(num) {
//     let total = 1;
//     for(let i = num; i > 1; i--) {
//      total *= i
//     }
//     return total;
// }
// factorial recursively
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num-1);
}

function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
     if(helperInput.length === 0) {
         return;
     }
     if(helperInput[0] % 2 !== 0) {
         result.push(helperInput[0])
     }
     helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);

// pure Recursion
function collectOddValues(arr) {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
      newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
collectOddValues([1,2,3,4,5]);
[1].concat(collectOddValues([2,3,4,5])),
                [].concat(collcectOddValues([3,4,5])),
                                  [3].concat(collectOddValues([4,5])),
                                                     [].concat([5])

                                                    

// write a function factorial which accepts a number and returns the factorial
// of that number. A factorial is the product of an integer and all the integers 
// below it; e.g factorial four (4!) is 
// equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1
function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num -1);
}

// write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.
function productOfArray(newArr) {
  if(newArr.length <= 1) return newArr[0];
  return newArr[0] * productOfArray(newArr.slice(1));
}

// write a function called a recursiveRange which accepts a number and adds 
// up all the numbers from 0 to the number passed to the function
function recursiveRange(num) {
    if(num === 0) return num;
    return num + recursiveRange(num-1);
}

// write a recursive function called reverse which accepts a string and return
// a new string in reverse.
function reverse(string) {
    if(string.length >= 1) return string;
    return reverse(string.concat(1)) + string[0]
}

// write a recursive function called isPalidrome which return true if
// the string passed to it is a palindrome (reads the same forward and backward)
//  Otherwise it returns false.
function isPalindrome(string) {
    if (string.length === 1) {
        return true;
    } 

    if (string.length === 2) {
        return string[0] === string[1];
    }

    if(string[0] === string.slice(-1)) return isPalindrome(string.slice(1,-1))   
}

// Write a recursive function called someRecursive which accepts an array and a 
// callback. The function returns true if a single value in the array returns true when 
// passed to the callback. Otherwise it return false
function someRecursive(array, callback) {
   if(array.length === 0) {
     return false;
   }

   if(callback(array[0])) {
     return true;
   }
   return someRecursive(array.slice(1), callback);
}

// write a recursive function called flatten which accepts an array of 
// arrays and returns a new array with all values flattened.
function flatten(oldArr) {
  var newArr = [];
  for(var i = 0; i < oldArr.length; i++) {
    if(Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// Linear Search 
// Write a function called linearSearch which accepts an array and a value, and return the 
// index at which the value exists. If the value does not exit in the array, return -1.
function linearSearch(arr, val) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34,56,1,2,3,45,56,687], 100);

// Binary Search 
// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while(arr[middle] !== elem && start <= end) {
//     console.log(start, middle, end);
//     if(elem < arr[middle]) {
//       end = middle -1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if(arr[middle] === elem) {
//     return middle;
//   }
//   return -1;
// }

// refactoring with tenary operator
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length -1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
    if(elem < arr[middle]) end = middle -1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], -10);
// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M               E
// [2, 5, 6, 9, 13, 15, 28, 30]
//               S   M       E
// [2, 5, 6, 9, 13, 28, 30]
//                   SM  E
// [2, 5, 6, 9, 13, 15, 28, 30]
//                           ME  S

function naiveSearch(long, short) {
  var count = 0;
  for(var i = 0; i < long.length; i++){
    for(var j = 0; j < short.length; j++) {
      if(short[j] !== long[i+j]) {
        break;
      }
      if(j === short.length - 1) {
        console.log('FOUND ONE!');
        count++;
      }
    }
  }
  return count;
}

naiveSearch('lorie loled', 'pop');