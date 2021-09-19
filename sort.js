// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array
// function bubbleSort(arr) {
//   for(var i = arr.length; i > 0; i--) {
//     for(var j = 0; j < i -1; j++) {
//         console.log(arr, arr[j], arr[j+1]);
//         if(arr[j] > arr[j+1]) {
//            //SWAP!
//            var temp = arr[j];
//            arr[j] = arr[j+1]; // working version of bubbleSort but not
//            arr[j+i] = temp; // Optimized
//         }
//     }
//     console.log('ONE PASS COMPLETE!');
//   }
//   return arr;
// }

// Refactoring
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < 1 - 1; j++) {
       if (arr[j] > arr[j + 1]) {
           swap(arr, j, j + 1);
       }
      }
    }
    return arr;
}

// Optimized with no swaps
function bubbleSort(arr) {
    var noSwaps;
  for(var i = arr.length; i > 0; i--) {
      noSwaps = true;
    for(var j = 0; j < i -1; j++) {
        console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]) {
           //SWAP!
           var temp = arr[j];
           arr[j] = arr[j+1];
           arr[j+i] = temp;
           noSwaps = false;
        }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([37,45,29,8,12,88,-3]);

// Make a variable to store the minimum value
// Store the first element as the smallest value you've seen so far
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the 
// new "minimum" and continue until the end of the array.
// If the "Minimum" is not the value (index) you initially began with 
// swap two values.
// Repeat this with the next element until the array is sorted.
// function selectionSort(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//               lowest = j;
//             }
//         }
//         console.log(arr);
//         console.log('SWAPPING TO:')
//         var temp = arr[i];
//         arr[i] = arr[lowest];
//         arr[lowest] = temp;
//         console.log(arr);
//         console.log('*********');
//     }
//     return arr;
// }

// Refactoring 
function selectionSort(arr) {
   const swap = (arr, idx1, idx2) => 
   ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

   for (let i = 0; i < arr.length; i++) {
       let lowest = i;
       for (let j = i + 1; j < arr.length; j++) {
           if (arr[lowest] > arr[j]) {
               lowest = j;
           }
       }
       if (i !== lowest) swap(arr, i, lowest);
   }
   return arr;
}
selectionSort([0,2,34,22,10,19,17]);

// i,j,lowest
// 0,1,1
// 0,2,2
// 0,3,2
// 0,4,2

// Insertion Sort
// Start by picking the second element in the array Now compare the second element
// with the one before it and swap if necessary. Continue to the next element
// and if it is in the incorrect order, iterate through the sorted portion(i.e. the left)
// side to place the element in the correct place.
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
           arr[j+1] = arr[j]
           console.log(arr);
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
insertionSort([2,1,9,76,4])
insertionSort([4,3,2,1])