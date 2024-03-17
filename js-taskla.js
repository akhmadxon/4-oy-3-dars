

// 1-masala
// let son = parseInt(prompt("Iltimos, bir son kiriting:"));

// let juftSum = 0;
// let toqSum = 0;

// for (let i = 1; i <= son; i++) {
//     if (i % 2 === 0) {
//         juftSum += i; 
//     } else {
//         toqSum += i; 
//     }
// }

// let farq = Math.abs(juftSum - toqSum);

// console.log(`Kiritilgan son ${son} ga qadar bo'lgan juft sonlar yig'indisi: ${juftSum}`);
// console.log(`Kiritilgan son ${son} ga qadar bo'lgan toq sonlar yig'indisi: ${toqSum}`);
// console.log(`Juft va toq sonlar yig'indisi orasidagi farq: ${farq}`);


// 2-masala
// let son1 = parseInt(prompt("Iltimos, birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Iltimos, ikkinchi sonni kiriting:"));

// for (let i = son1; i <= son2; i++) {
//     console.log(i);
// }

// if (son1 < son2) {
//     console.log(`${son1} son ${son2} sonidan kichik.`);
// } else if (son1 > son2) {
//     console.log(`${son1} son ${son2} sonidan katta.`);
// } else {
//     console.log("Kirilgan sonlar o'zaro teng.");
// }


// 3-masala
// let son = parseInt(prompt("Iltimos, bir son kiriting:"));

// let juftSoni = 0;
// for (let i = 1; i <= son; i++) {
//     if (i % 2 === 0) {
//         juftSoni++;
//     }
// }

// console.log(`Kiritilgan son ${son} ga qadar bo'lgan juft sonlar soni: ${juftSoni}`);


// 4-masala
// let soz = prompt("Iltimos, so'zni kiriting:");

// let harfSoni = soz.length;

// console.log(`Kiritilgan so'zda ${harfSoni} ta harf bor.`);


// 5-masala
// let son = parseInt(prompt("Iltimos, bir son kiriting:"));

// function tubSonmi(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false; 
//         }
//     }
//     return true;
// }

// if (tubSonmi(son)) {
//     console.log(`${son} tub son.`);
// } else {
//     console.log(`${son} tub son emas.`);
// }


// 6-masala
// let soz = prompt("Iltimos, so'zni kiriting:");

// let unliHarfSoni = 0;
// const unliHarflar = ['a', 'e', 'i', 'o', 'u', 'o`', 'A', 'E', 'I', 'O', 'O`' ,'U'];

// for (let harf of soz) {
//     if (unliHarflar.includes(harf)) {
//         unliHarfSoni++;
//     }
// }

// console.log(`Kiritilgan so'zda ${unliHarfSoni} ta unli harf bor.`);


// 7-masala
// let soz = prompt("Iltimos, so'zni kiriting:");

// let undoshHarfSoni = 0;
// const undoshHarflar = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 

// for (let harf of soz) {
//     if (undoshHarflar.includes(harf)) {
//         undoshHarfSoni++;
//     }
// }

// console.log(`Kiritilgan so'zda ${undoshHarfSoni} ta undosh harf bor.`);


// 8-masala
// let son = parseInt(prompt("Iltimos, bir son kiriting:"));

// let yigindi = 0;
// for (let i = 1; i < son; i++) {
//     if (son % i === 0) {
//         yigindi += i;
//     }
// }

// if (yigindi === son) {
//     console.log(`${son} mukammal son.`);
// } else {
//     console.log(`${son} mukammal son emas.`);
// }



