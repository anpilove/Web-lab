let arr = [];
const n = 15; 

for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 21) - 10);
}

console.log(`Массив: ${arr}`);

let sum = 0;
let count = 0;


for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    count++;
  }
}

let average = sum / count;

console.log(`Среднее арифметическое положительных элементов: ${average}`);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = arr[i] * arr[i];
  }
}

console.log(`Массив с квадратами отрицательных чисел: ${arr}`);



let sumPositive = 0;
let countPositive = 0;
let sumNegative = 0;
let countNegative = 0;
let countZero = 0;

// проходим по массиву и считаем сумму и количество положительных, отрицательных и нулевых элементов
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sumPositive += arr[i];
    countPositive++;
  } else if (arr[i] < 0) {
    sumNegative += arr[i];
    countNegative++;
  } else {
    countZero++;
  }
}

// вычисляем среднее арифметическое положительных и отрицательных элементов
let averagePositive = sumPositive / countPositive;

let averageNegative = sumNegative / countNegative;




console.log(`Среднее арифметическое положительных элементов: ${averagePositive}`);
console.log(`Среднее арифметическое отрицательных элементов: ${averageNegative}`);
console.log(`Число нулей: ${countZero}`);


