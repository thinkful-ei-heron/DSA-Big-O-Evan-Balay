// Big O Drills! 


/**
 * #1
 * 
 * Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to 
 * find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 
 * people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would 
 * like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
 * 
 * answer: constant because you are asking all 15 people once "who has the same breed of dog"   O(1)
 * 
 * #2
 * 
 * Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
 * You want to find a playmate for your dog who is of the same breed. So you want to know if 
 * anyone out of the 15 people have the same breed as your dog. You start with the first person 
 * and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, 
 * and the next until you find someone who has a golden or there is no one else to ask.
 * 
 * answer: linear because you are asking each person once if they have the same breed. if the number of 
 * people grows, the amount of times you ask will grow proportionately. O(n)
 * 
 * 
 */

 /**
  * # 3
  */
 function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
};

/**
 * answer: constant - value gets evaluated once, no matter how big or small value is. O(1)
 */

 /**
  * #4
  */
 function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
/**
 * answer: linear - each array gets evaluated one time through. WRONG - polynomial (O(n^2))
 */

 /**
  * #5
  */

 function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/**
 * answer: linear - the for loop loops through the length of the array once and 
 * then returns the array with the new values O(n)
 */



//  #6

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

// answer: Linear - it will loop through the array until the value matches the item value.



// #7

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

// answer: Polynomial - it loops through the same data array twice.



// #8

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i == 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

// Answer: Linear - if the 


// #9

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

// Logarithmic because the data set shriks each time it's run



// #10

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// answer: constant - always returns one random number.


// #11

function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

// answer: Linear - checks if n is a number greater than 2. If its even it returns false, if its true it returns true.



// #12 Tower of Hanoi

function TOH(num, source, dest, temp) {
    if (num === 1) {
        return print(source, dest);
    }

    

}

function print(source, dest) {
    console.log(`Moving from ${source} => ${dest}`)
}

TOH(3, A, C, B);