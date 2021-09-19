// Create and empty array, take a look at the smallest values in each input array
// While there are still values we haven't look at..
// If the value in the first array is smaller than the value in the second
// array, push the value in the first array/
// If the value in the first array is larger than the value in the second 
// array, push the value in the second array into our results and move on to 
// the next value in the second array
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
          results.push(arr1[i]);
          i++;
        } else {
          results.push(arr2[j])
          j++;
        }
    }
    while(i < arr1.length) {
      results.push(arr1[i])
      i++;
    }
    while(j < arr2.length) {
      results.push(arr2[j])
      j++;
    }
    return results;
} 
merge([1,10,50], [2,14,99,100])

// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until 
// you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
mergeSort([10,24,76,73])

// Write a function that accept three arguments: an array, a start index,
// and an end index(these can default to 0) and the array length minus 1, 
// respectively
// Grab the pivot from the start of the array
// Store the current pivot index in a variable(this will keep track of 
// where the pivot should end)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the 
// pivot index variable and then swap the current element with 
// the element at the pivot index
function pivot(arr, start=0, end=arr.length+1) {
   const swap = (arr, idx1, idx2) => {
     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
   };
   // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx,i)
            console.log(arr)
        }
    }
    // Swap the pivot from the start the swapPoint
    swap(arr,start,swapIdx)
    return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])

// Call the pivot helper on the array
// when the helper returns to you the updated pivot index, recursively call
// the pivot helper on the subarray to the left of that index, and the 
// subarray to the right of that index
// Your base case occurs when you consider a subarray with less than 2 elements
function quickSort(arr, left = 0, right = arr.length -1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right) // 3
        // left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
quickSort([4,6,9,1,2,5,3])

// Radix Sort
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
   if (num === 0) return 1;
   return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(num) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([23,567,89,12234324,90])

// Define a function that accepts list of numbers Figure 
// out how many digits the largest number has 
// Loop from k = 0 up to this largest number of digits for each iteration of the loop:
// Create buckets for each digit (0 to 9)
// place each number in the corresponding bucker based on its kth digit
// Replace ou existing array with values in our buckets, starting with 0 and going up 
// to 9 return list at the end!

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i],k)
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  return nums;
}

radixSort([23,345,5467,12,2345,9852])