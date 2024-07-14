// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//     const userName = prompt("");
//     if (userName === "") {
//         return;
//     }
//     callback(userName);
// }

// function greet(name) {
//     console.log(`Helllo ${name}`)
// }

// letMeSeeYourName(greet);

// *******

// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// передаючи йому створений об"єкт
// showProduct(product)  - колбек, що приймає об"єкт продукта та виводить його у консоль

// function makeProduct(name, price, callback){
//     const newProduct = {name, price, id: Date.now()};
//     callback(newProduct)
// }

// function showProduct(product) {
//     console.log(product)
// }

// makeProduct('apple', 10, showProduct);

// *******

// Напишіть функцію each(array, callback), яка першим параметром приймає масив,
//     а другим - функцію, яка буде застосована до кожного елемента масиву.
//     Функція each повинна повернути новий масив, елементами якого будуть результати виклику callback
// callback повинна помножувати елементи на 2
// const arrayNumber = [3, 5, 6, 34, 8, 83, 12, 34];
// function each(array, callback) {
// return array.map(callback);
// };

// function multy(el){
//    return el * 2;
// };

// console.log(each(arrayNumber, multy))

// *******

// Напишіть функцію makeCounter, яка повертає іншу функцію,
//     яка рахує та виводить у консоль кількість своїх викликів

// function makeCounter(el){
//     // let el = 0;
// return function(){
//     return el += 1;
// }
// }
// const count = makeCounter(5);
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// *******

// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

// function savePassword(password) {
//     return (currentPassword) => password === currentPassword
    
// }

// const check = savePassword('123qwe');
// console.log(check('234qwe'));
// console.log(check('123qwe'));
// *******

// Напиши клас Client, який створює об"єкт із властивостями login та email
// оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email

// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get login(){
//         return this.#login
//     }
//     set login(newLogin){
//         this.#login = newLogin
//     }
//     get email(){
//         return this.#email
//     }
//     set email(newEmail){
//         this.#email = newEmail
//     }
// }

// const boby = new Client('bobyyy', 'boby@gmail.com');

// console.log(boby.email);
// boby.email = 'boooby@mail.com'
// console.log(boby.email);

// console.log(boby.login);
// boby.login = 'boooby'
// console.log(boby.login);
// *******

// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість Priopity,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)
// class Notes{
//     static PRIORITY = {
//         HIGHT: 'hight',
//         LOW: 'low',
//       }
//       constructor(){
//         this.items = [];
//       }
//       addNote(note){
//         this.items.push(note);
//       }
//       removeNote(text) {
//         this.items = this.items.filter(el => el.text !== text)
//       }

//       updatePriority(text, newPriority){
//         this.items = this.items.map(el => {
//             if(el.text === text) {
//                 el.priority = newPriority;
//             } return el
//         })
//       }
// }
// const note1 = new Notes();
// note1.addNote({ text: 'Note1', priority: Notes.PRIORITY.LOW })
// note1.addNote({ text: 'Note2', priority: Notes.PRIORITY.LOW })
// note1.addNote({ text: 'Note3', priority: Notes.PRIORITY.LOW })
// note1.removeNote('Note2')
// note1.updatePriority('Note3', Notes.PRIORITY.HIGHT)
// console.log(note1.items)
// *******

//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// class Animal {
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     }
//     getInfo(){
//         return `Name: ${this.name}, Type: ${this.type}`
//     }

// };
// class Mammals extends Animal {
//     constructor(name, type, feed) {
//         super(name, type);
//         this.feed = feed;
//     }
//     showFeed(){
//         return `${this.name} eats ${this.feed}`
// }
// };
// class Bird extends Animal {
//     constructor(name, type, feed) {
//         super(name, type);
//         this.feed = feed;
//     }
//     showFeed(){
//         return `${this.name} eats ${this.feed}`
// }
// };
// class Reptile extends Animal {
//     constructor(name, type, feed) {
//         super(name, type);
//         this.feed = feed;
//     }
//     showFeed(){
//         return `${this.name} eats ${this.feed}`
// }
// };
// class Zoo {
//     constructor(){
//         this.animalList = [];
//     }
//     addAnimal(...animal){
//         this.animalList.push(animal)
//     }
//     showAnimalList(){
//         return this.animalList;
//     }
// };

// const dog = new Mammals(`Patron`, `tarier`, `bones`);
// const parrot = new Bird('Kesha', 'ara', 'corn');
// const snake = new Reptile('Kaa', 'pyton', 'mouse');

// console.log(dog.getInfo());
// console.log(dog.showFeed());
// console.log(parrot.getInfo());
// console.log(parrot.showFeed());
// console.log(snake.getInfo());
// console.log(snake.showFeed());

// const askaniaZoo = new Zoo();

// askaniaZoo.addAnimal(dog, parrot, snake);
// console.log(askaniaZoo.showAnimalList());
// console.log(typeof Animal);
// *******

// Напишіть функцію для зберігання знижки.
// Функція повертає іншу функцію, яка приймає суму покупки
// та повертає фінальну суму зі збереженою знижкою
// function saveDiscount (discount){
//         return (sum) => sum - (sum * discount / 100)
//     }
// const num = saveDiscount(50);
// console.log(num(100));


