const values = ["красный", "черный", "белый"];

const counts = {
  красный: 0,
  черный: 0,
  белый: 0
};

for (let i = 0; i < 1000000; i++) {
  const randomIndex = Math.floor(Math.random() * values.length);
  const randomValue = values[randomIndex];
  
  counts[randomValue]++;
}

const maxCount = Math.max(counts.красный, counts.черный, counts.белый);

console.log("Количество выпадений красного значения:", counts.красный);
console.log("Количество выпадений черного значения:", counts.черный);
console.log("Количество выпадений белого значения:", counts.белый);
console.log("Максимальное количество выпадений:", maxCount);
