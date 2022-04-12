
// ---------- 1 -------- //

// const playlist = {
//     name: `Мой супер плейлист`,
//     ratting: 5,
//     tracks: [`Трек-1`,`Трек-2`,`Трек-3`],
//     trackCount: 3,
// };

// playlist.qwe = 5; // добавление свойства 

// console.log(playlist)
// const propertyName = 'tracks';

// console.log(playlist.propertyName); // вернет undefined. Такого свойства не сушествует.
// console.log(playlist[propertyName]); // вернет ['Трек-1', 'Трек-2', 'Трек-3']. 
//                                      //   Тоже самое, что console.log(playlist.tracks)

// console.log(playlist.name);

// console.log(playlist.ratting); // 5 
// console.log(playlist[`ratting`]); // 5


// --------- 2 --------- //

// const fn = function(myObject){
//     // myObject =  {a: 1 , b: 2} - аргумент записиваеться в параметр 
//     console.log(myObject);
// };

// fn({a: 1 , b: 2})

// ------- 3 --------- //

// const rftm = function(){
//     return {a: 5}; // возврат это тоже присваивание 
// }

// console.log(rftm());



// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//     username,
//     email,
// };

// console.log(signupData)



// <input name="color"  value="tomato">

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputValue]: inputValue, 
// }
//  console.log(colorPickerData)


// console.log({a: 1} === {b: 1}); // false 
// console.log([1] === [1]); // false

// const a = {x: 1, y: 2};
// const b = a;

// a.c = 100;

// console.log(a === b); // true
// console.log(a); // === console.log(b);
// console.log(b);


/*
  * Массив и функция это обьекты 
*/ 

// const a = [1,2,3]

// a.hello = 'qwe'

// console.log(a)
