const array = [0, 1, 2, 1, 3, 4, 4, 5];

const repeating = [];

const nonRepeating = [];

// Iterate through the array
for (let i = 0; i < array.length; i++) {
    let isRepeating = false;

    // Checking for repeating of current element
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {

            isRepeating = true;
            break;
        }
    }

    // filling in appropriate array
    if (isRepeating) {


        // Checking if the element is already added to repeating array
        if (!repeating.includes(array[i])) {
            repeating.push(array[i]);
        }

    } else {
        // Checking if the element is already added to non-repeating array
        if (!nonRepeating.includes(array[i])) {
            nonRepeating.push(array[i]);
        }
    }
}

console.log("Repeating elements:", repeating);

console.log("Non-repeating elements:", nonRepeating);


//-----------------------------------Another approach-------------------------------------//

let arr = [0, 0, 1, 2, 7, 1, 5];

let counts = {}; 

let repeatingElements = []; 

for (let i = 0; i < arr.length; i++) {

    let num = arr[i];

    // If the number doesn't exist in counts, initialize it
    if (!counts[num]) 
    counts[num] = 0;
    counts[num]++; // Increment the count
    
    // If the count becomes 2, it means the number is repeating
    if (counts[num] === 2) {

        repeatingElements.push(num);
    }
}

console.log("Repeating elements:", repeatingElements);
