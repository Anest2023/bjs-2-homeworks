function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr [i];
    }

    sum += arr[i];
  }

  const avg = +(sum / arr.length).toFixed(2);
    
  return { min: min, max: max, avg: avg };

}


console.log(getArrayParams(-99, 99, 10));



function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
  
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {

    console.log(arr, 'i', i, arr[i]);
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i];
    }
  }
return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker (...arr) {
  
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement ===0) return 0;

  return +(sumEvenElement / countEvenElement).toFixed(2);
}

console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));









//function summElementsWorker(...arr) {

//}

//function differenceMaxMinWorker(...arr) {

//}

//function differenceEvenOddWorker(...arr) {

//}

//function averageEvenElementsWorker(...arr) {

//}

//function makeWork (arrOfArr, func) {

//}
