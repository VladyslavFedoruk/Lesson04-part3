//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
for (let dollar = 10; dollar <= 100; dollar += 10) {
  const valuta = dollar * 27;
  console.log(dollar + ' доларів = ' + valuta + ' гривень');
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let N = prompt('Укажіть будь-яке ціле число для 3-го завдання');
for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    console.log(i);
  }
}

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const userNumber = 24;
let isntIt = true;

if (userNumber <= 1) {
  isntIt = false; // Числа менше або рівні 1 не є простими
} else {
  for (let i = 2; i < userNumber; i++) {
    if (userNumber % i === 0) {
      isntIt = false; // Знайдено дільник, число не є простим
      break;
    }
  }
}
if (isntIt) {
  console.log(`${userNumber} є простим числом.`);
} else {
  console.log(`${userNumber} не є простим числом.`);
}

//Дане деяке число num. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь:
const num = prompt('Укажіть будь-яке число для 5-го завдання')
let isPowerOfThree = false;

if (num > 0) {
  let currentNum = num;

  while (currentNum % 3 === 0) {
    currentNum /= 3;
    if (currentNum === 1) {
      isPowerOfThree = true;
      break;
    }
  }
}

if (isPowerOfThree) {
  console.log(num + ' отримаємо шляхом зведення числа 3 у деякий ступінь.');
} else {
  console.log(num + ' не отримаємо шляхом зведення числа 3 у деякий ступінь.');
}