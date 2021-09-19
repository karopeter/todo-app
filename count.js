function charCount(str) {
    // make object return tat the end
    var obj = {};
    // loop over string, for each charcter
    for(var char of str) {
      char = char.toLowerCase()
     // if the char is a number/letter AND is a key object, add one count
     if (isAlphaNumeric(char)) {
        char = char.toLowerCase();
        obj[char] = ++obj[char] || 1;
         // if the char is a number/letter AND not in object, add it to object and set value to one
       }
     }
    // if character is something else (space, period, etc.) don't do anything
    // return object at the end
    return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) {
        return false;
      }
    return true;
}

charCodeAt(0);

// function same(arr1, arr2) {
//    if(arr1.length !== arr2.length) {
//      return false;
//    }
//    for(let i = 0; i < arr1.length; i++) {
//      let correctIndex = arr2.indexOf(arr1[i] ** 2)
//      if(correctIndex === -1) {
//        return false;
//      }
//      console.log(arr2);
//      arr2.splice(correctIndex, 1)
//    }
//    return true;
// }
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

// Givent two string, write a function to determine if the 
// second string is an anagram of the first. An anagram is a word, phrase
// or name formed by rearranging the letters of another, such as cinema, formed
// from iceman.

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup);
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram('anagram', 'nagaramm');

// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. Return an array
// that includes both values that sum to zero or undefined if a pair does not 
// exist
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 5, 10]);

// implement a function called countUnique values, which accepts 
// a sorted array, and counts the unique values in the array. There can 
// be negative numbers in the array, but it will always be sorted.
function countUniqueValues(arr) {
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}

countUniqueValues([1,2,2,5,7,7,99]);

// write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n
// consecutive elements in the array.
// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//     console.log(temp, max);
//   }
//   return max;
// }

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3);