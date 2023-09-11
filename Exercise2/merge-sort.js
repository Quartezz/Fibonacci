function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: an array with 0 or 1 elements is already sorted.
    }
  
    // Split the array into two halves.
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    // Recursively sort both halves.
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);
  
    // Merge the sorted halves.
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both arrays and merge them into the result.
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements from both arrays (if any).
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [5, 2, 9, 3, 6, 1, 8, 7];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 7, 8, 9]