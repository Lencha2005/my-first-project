/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

// switch(number) {
//     case 0: {
//         console.log('Ви ввели число 0');
//         break;
//     }
//     case 1: {
//         console.log('Ви ввели число 1');
//         break;
//     }
//     case 2: 
//     case 3: {
//         console.log('Ви ввели число 2, може 3');
//         break;
//     }
//     default: {
//         console.log('Ви ввели якесь інше число');
//     }
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = false;
// const isDnd = false;
// let canOpenChat;
// if(isOnline && isFriend) {
//     canOpenChat = 'yes';
// } else {
//     canOpenChat = 'no';
// }


// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
? Напиши скрипт перевірки підписки користувача при доступі до контента
? - Є три типа підписки: free, pro і vip.
? - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = 'vip';
// let canAccessContent;
// if(sub === 'pro' || sub === 'vip') {
//     canAccessContent = 'yes';
// } else {
//     canAccessContent = 'not'
// }

// console.log('Чи є доступ до контенту?', canAccessContent);

/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/

// const a = 20;
// const b = 100;
// for(i = a; i <= b; i++) {
//     if(i % 5 === 0) {
//         console.log(i)
//     }
// }

/*
? Напиши скрипт, який підраховує суму всіх парних чисел,
? які входять в діапазон чисел у змінних від min до max.
? Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
*/

// const min = 0;
// const max = 5;

// let total = 0;
// for(i = min; i <= max; i++) {
//     if(i % 2 === 0) {
//         total += i;
//     }
    
// }
// console.log(total);

// function getLastElementMeta(array) {
//     const arrayNew = [array.length - 1, array[array.length - 1]]
//     return arrayNew
//   }

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i <= order.length; i++){
//         console.log(order[i]);
//         total += order[i];
//         console.log(total);
//     }
//     return total
// }

//   calculateTotalPrice([164, 48, 291]);

// ****



// function createReversedArray() {
//     let args = Array.from(arguments);
//     console.log(args.toReversed())
//       return args.toReversed();
      
//   }
  
//   createReversedArray(12, 85, 37, 4)
  