/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = +rectSides[0] * +rectSides[1];

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;
// for (const num of numbers) {
//     if(num % 2 === 0) {
//         total += num;
    
        
//     }
//     console.log('total: ', total);
// }

// console.log('numbers: ', numbers);


/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");
// console.log(namesArray);
// console.log(phonesArray);
// for ( let i = 0; i < namesArray.length; i++) {
//     console.log(`${namesArray[i]} - ${phonesArray[i]}`);
// }

    // console.log(`${namesArray[0]} - ${phonesArray[0]}`);
    // console.log(`${namesArray[1]} - ${phonesArray[1]}`);
    // console.log(`${namesArray[2]} - ${phonesArray[2]}`);
    // console.log(`${namesArray[3]} - ${phonesArray[3]}`);


/*
? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
*/

// const string = 'Our office is closed so we`re working from home today.';
// let stringArray = string.split(" ");
// stringArray = stringArray.slice(1, -1);
// console.log(stringArray);

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = 0;
// for (const num of values) {
// if (num < min) {
//     min = num;
// }
// }

// console.log(min);

/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;
// let totalManagerSalaries = 0;
// let totalDeveloperSalaries = 0;

// for(const manager of managerSalaries) {
//     totalManagerSalaries += manager;
// }
// for(const developer of developersSalaries) {
//     totalDeveloperSalaries += developer;
// }
// total = totalDeveloperSalaries + totalManagerSalaries;
// console.log(total);

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const rectSidesArr = dimensions.split(' ');

//   return +rectSidesArr[0] * +rectSidesArr[1];
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// const checkCaseOfLetter = function (letter) {
//   // if (letter === letter.toLowerCase()) {
//   //   return 'lower case';
//   // } else {
//   //   return 'upper case';
//   // }

//   return letter === letter.toLowerCase() ? 'lower case' : 'upper case';
// };

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

// const changeCaseOfLetters = function (str) {
//   const lettersArr = str.split('');
//   let resultedStr = '';

//   console.log(lettersArr);

//   for (const letter of lettersArr) {
//     if (letter === letter.toLowerCase()) {
//       resultedStr = resultedStr + letter.toUpperCase();
//     } else {
//       resultedStr = resultedStr + letter.toLowerCase();
//     }
//   }

//   return resultedStr;
// };

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл,
? який для кожного елемента масиву буде виводити в консоль повідомлення у
? форматі <номер елемента> - <значення елемента>. Нумерація елементів
? повинна починатися з 1.
?
? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
? індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// function logItems(items) {
//     for( let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
//     return `${i + 1} - ${items[i]}`;
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/

// function printInfo(names, phones) {
//     const namesArray = names.split(",");
//     const phonesArray = phones.split(",");
//     console.log(namesArray);
//     console.log(phonesArray);
//     for( let i = 0; i < namesArray.length; i++) {
//        console.log(`${namesArray[i]} - ${phonesArray[i]}`);
//     }
//     return `${namesArray} - ${phonesArray}`;
// }

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');

/*
? Метод splice().
?
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//     courses = courses.push();
//     return courses
// }
// function removeCourse(name) {
//     courses = courses.pop();
//     return courses;
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'

// updateCourse('HTML', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// ? У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// ? підсумовування всіх зарплат і збережіть результат у змінній sum.
// ? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
// */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// const salariesOwn = Object.values(salaries);
// console.log(salariesOwn);
// for (const salary of salariesOwn) {
//     sum += salary;
// };
// console.log(sum);

