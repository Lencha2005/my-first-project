// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mood зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of

// const user = {
//     name: 'John',
//     age: 20,
//     hobby: 'tennis',
//     premium: true,
//   }
  
//   user.name = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
  
//   const arr = Object.keys(user);
//   for ( const key of arr) {
//     console.log(`${key}: ${user[key]}`)
//   };
  

// ****

// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат


// const calculator = {
//     read(a, b) {
// this.firstValue = a;
// this.secondValue = b;
//     },
//     sum() {
// return this.firstValue + this.secondValue
//     },
//     mult(){
//         return this.firstValue * this.secondValue
//     },
// };

// console.log(calculator.read(5, 6));
// console.log(calculator.sum(5, 6));
// console.log(calculator.mult(5, 6));

// *******

// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

// const stonesArray = [
//     { name: 'Ізумруд', price: 1300, quantity: 4 },
//     { name: 'Брилліант', price: 2700, quantity: 6 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебінь', price: 150, quantity: 100 },
//   ]
  
//   function calcTotalPrice(stones, stonesName) {
//     for(const stone of stones) {
//       if(stone.name.toLowerCase() === stonesName.toLowerCase()){
//         return stone.price * stone.quantity
//       }
//     }
//     return `${stonesName} не знайдено`;
//   }
//   console.log(calcTotalPrice(stonesArray, 'Сапфір'));
//   console.log(calcTotalPrice(stonesArray, 'Рубін'));

// ******

// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// function updateObject(obj, ...rest) {
//     const newObj = {};
//     const keysArr = Object.keys(obj);
//     for(const key of keysArr){
//         if(!rest.includes(key)){
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// };

// console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'));

// function updateObject(obj, ...rest) {
//     const newObj = {...obj};
    
//     for(const key of rest){
        
//             delete newObj[key];
    
//     }
//     return newObj;
// };
// console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'));

// ****

// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]


// function test(firstArr, secondArr) {
//     const newArr = [];
//     for(const item of firstArr) {
//         if(!secondArr.includes(item)) {
//             newArr.push(item);
//         }
//     };
//     }
    
//     console.log(test([1, 2, 3, 1, 2], [1, 2]));


// ***

// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [ 11, 9, 2, 1 ]

// function reverse(arr) {
//     const newArr = [];
//     for(let i = arr.length -1; i >= 0; i--){
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// // console.log(reverse([ 11, 9, 2, 1 ]))
// // console.log(reverse(arrNumber))
// console.log(arrNumber)
// console.log(arrNumber.toReversed())
// console.log(arrNumber)

// ***

// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// function remuveFalse(arr){
//     const newArr = [];
// for(const elem of arr){
//     if(Boolean(elem) !== false) {
//         newArr.push(elem)
//     }

// }
// return newArr
// }

// console.log(remuveFalse([0, 1, false, 2, undefined, '', 3, null]))

// function remuveFalse(arr){
//     const newArr = [];
// for(const elem of arr){
//     if(elem) {
//         newArr.push(elem)
//     }
// }
// return newArr
// };

// console.log(remuveFalse([0, 1, false, 2, undefined, '', 3, null]));


// *******

// Напишіть фукнцію, яка порівнює два масиви і повертає true, якщо вони ідентичні
// Очікується([1, 2, 3], [1, 2, 3]) => true
// Очікується([4, 5, 5], [1, 2, 3]) => false
// Очікується([4, 5, 5,6,7], [1, 2, 3]) => false


// function checkArr(firstArr, secondArr) {
//     if( firstArr.length !== secondArr.length) {
//         return false
//     }
//     for(let i = 0; i < firstArr.length; i++) {
//         if(firstArr[i] !== secondArr[i]){
//             return false
//         }
//     }
//     return true
// }

// console.log(checkArr([1, 2, 3], [1, 2, 3]))
// console.log(checkArr([4, 5, 5], [1, 2, 3]))
// console.log(checkArr([4, 5, 5,6,7], [1, 2, 3]))


// ******

// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]


// function flatArr(arr) {
//     const newArr = [];
//     for (const item of arr) {
//         if(Array.isArray(item)) {
// for(const elem of flatArr(item)){
//     newArr.push(elem);
// }
//         } else {
//             newArr.push(item);
//         }
//     }
//     return newArr
// }

// console.log(flatArr([1, 2, [3, 4, [5, [15]]]]))

// function flatArr(arr) {
//     const newArr = [];
//     for (const item of arr) {
//         if(Array.isArray(item)) {
// for(const elem of flatArr(item)){
//     newArr.push(elem);
// }
//         } else {
//             newArr.push(item);
//         }
//     }
//     return newArr
// }


// console.log(flatArr([1, 2, [3, 4, [5, [15]]]]))

// *** or

// console.log([1, 2, [3, 4, [5, [15]]]].flat(2))


// *******

// Напишіть функцію, що прибирає значення, які повторюються
// Очікується["a",1, 2, "b",3, 1, 2,"a"] => ["a", 1, 2 ,"b" , 3]

// function removeDuble(arr) {
//     const newArr = [];
//     for(const item of arr) {
//         if(!newArr.includes(item)) {
//             newArr.push(item)
//         }
//     }
//     return newArr;
// }

// console.log(removeDuble(["a",1, 2, "b",3, 1, 2,"a"]));

// function removeDuble(arr) {
//     const newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr.indexOf(arr[i]) === i) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(removeDuble(["a",1, 2, "b",3, 1, 2,"a"]));


// ****


// Напиши скрипт керування особистим кабінетом інтернет банку.
// Є об'єкт account, в якому потрібно реалізувати методи роботи із балансом та історією транзакцій

// Типів транзакцій всього два.Можна або покласти гроші на рахунок, або зняти гроші з рахунка

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  }
  
  // Кожна транзакція - це об'єкт із властивостями id, type, amount
  
  const account = {
    //поточний баланс рахунку
    balance: 0,
  
    //історія транзакцій
    transactions: [],
  
    // Метод створює та повертає об'єкт транзакцій
    // Приймає суму та тип транзакції
  
    createTransaction(type, amount) {
      return {
        type,
        amount,
        id: this.transactions.length,
      }
    },
  
    // Метод відповідає за додавання суми до балансу.
    // Приймає суму транзакції
    // Викликає createTransaction для створення об'єкта транзакції
    // Після чого додає його до історії транзакцій
  
    deposit(amount) {
      this.balance += amount;
      this.transactions.push(this.createTransaction(Transaction.DEPOSIT, amount));
    },
  
    // Метод відповідає за зняття суми з балансу.
    // Приймає суму тразакцій.
    // Викликає createTransaction для створення об'єкта транзакції
    // Після чого додає його до історії транзакцій
    // Якщо amount більше за поточний баланс, виводимо повідомлення про те, що на рахунку недостатньо коштів
  
    withdraw(amount) {
      if(amount > this.balance) {
        return  console.log(`Недостатньо коштів`)
      }
  this.balance -= amount;
  this.transactions.push(this.createTransaction(Transaction.WITHDRAW, amount));
    },
  
    // Метод, що повертає поточний баланс
    getBalance() {
      return this.balance;
    },
  
    // Метод шукає та повертає об'єкта транзакції по id
    getTransactionDetails(id) {
      for(const item of this.transactions) {
        if(item.id === id) {
      return item
        }
      }
      return 'Транзакції не знайдено'
    },
  
    // Метод повертає кількість коштів певного типу тразакції зі всієї історії транзакції
    getTransactionType(type) {
      let sum = 0;
      for(const item of this.transactions) {
  if( item.type === type) {
    sum += item.amount;
  }
      }
      return sum;
    },
  }
  
  account.deposit(100)
  account.deposit(200)
  account.deposit(300)
  
  account.withdraw(200)
  account.withdraw(700)
  account.withdraw(200)
  console.log(account)
  
  console.log(account.getBalance())
  console.log(account.getTransactionDetails(3))
  console.log(account.getTransactionType(Transaction.DEPOSIT))
  console.log(account.getTransactionType(Transaction.WITHDRAW))