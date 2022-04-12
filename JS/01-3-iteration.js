const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}

let totalFeedback = 0;

// ------------- keys ----------------- //

// const keys = Object.keys(feedback);

// console.log(keys); //  ['good', 'neutral', 'bad']

// for (const key of keys){
//     console.log(key); // синтаксис квадратных скобок
//     console.log(feedback[key]); // 5, 10, 3

//     totalFeedback += feedback[key]; 
// }

// console.log('totalFeedback:', totalFeedback)


// ------------- values ----------------- //

const values = Object.values(feedback);

console.log(values) // [5, 10, 3]

for (const value of values){
    totalFeedback += value;
}

console.log(totalFeedback); // 18 