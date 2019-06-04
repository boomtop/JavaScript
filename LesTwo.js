'use strict'

let num = 50;
if  (num <49){
    console.log('неверно');
} else if (num > 100){
    console.log('много');
} else {
    console.log('Верно!');
};

//тернарный оператор вместо if
(num == 50) ? console.log('Верно!!') : console.log('неверно');

switch (num) {
    case num < 49:
        console.log('неверно');
        break;
    case num > 100:
        console.log('много');
        break;
    case 50:    //при сравнении в case 
            console.log('Верно!!!');
            break;
    default:
        console.log('Сработал дефолт');
        break;
}

console.log('*****************************');

// while (num < 55){
//     console.log(num);
//     num++;
// }

//Сначала что-то сделать, потом проверить 
// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break;
    }
    if (i == 2) {
        continue;
    }
    console.log(i)
}