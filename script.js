//!  TASK 1
// Foydalanuvchidan parolni ikki marta kiritishni soâ€˜rang. Agar ikkala parol bir xil boâ€˜lsa, true, aks holda false degan xabar chiqsin.
/*  variyant 1 */

//   let password = prompt('parolingizni kiritng...');
// let password_again = prompt('parolingizni qayta kiritng...');

// if (password === password_again) {
//     console.log("✅ Parol to‘g‘ri!");

//   } else {
//       console.log("❌ Parollar mos kelmadi!");
//     }

/*___________________________________________________________________*/

//!  TASK 1
/*  variyant 2 */

// let password = prompt('parolingizni kiritng...');
// let password_again = prompt('parolingizni qayta kiritng...');
// console.log(`parol: ${password}`);
// console.log(`confirm: ${password_again}`);

// password === password_again ? console.log("✅ Parol to'g'ri!"): console.log("❌ Parollar mos kelmadi!");

/*___________________________________________________________________*/
/*___________________________________________________________________*/

//!  TASK 2
// Foydalanuvchi raqam kiritsin, kiritgan raqam toq yoki juft ekanini consoleda chiqaring. toq bolsa false just bo'lsa true chiqsin
/*  variyant 1 */

// let num = prompt('son...');

// if (num % 2 === 0){
//   console.log(true);

// } else {
//   console.log(false);
// }

/*___________________________________________________________________*/

//!  TASK 2
/*  variyant 2 */

// let num = prompt('son...');
// num % 2 === 0 ? console.log(true): console.log(false);

/*___________________________________________________________________*/
/*___________________________________________________________________*/

//!  TASK 3
// Foydalanuvchi raqam kiritsin, raqamni kvadratini, kubini va ildizini consoleda chiqaring.


// let num = prompt('raqam...');
// console.log("Kvadrati: " + num ** 2);
// console.log("Kubi: "+ num ** 3);
// console.log("Ildizi: "+ num ** .5);

/*___________________________________________________________________*/
/*___________________________________________________________________*/

//!  TASK 4
// Foydalanuvchi to'g'ri to'rtburchakni x va y tomonlarini kiritsin. consoleda to'rtburchak yuzi va perimetrini chiqaring
//???

/*___________________________________________________________________*/
/*___________________________________________________________________*/
/*  TASK 5  */
// Foydalanuvchi 3 marta son kiritsin, shu sonlardan eng kattasini va eng kichigini consolega chiqaring

// let num1 = prompt('1-son...');
// let num2 = prompt('2-son...');
// let num3 = prompt('3-son...');
// console.log("katta " + Math.max(num1, num2, num3));
// console.log("kichik " + Math.min(num1, num2, num3));
// console.log(`1-son... ${num1}`);
// console.log(`2-son... ${num2}`);
// console.log(`3-son... ${num3}`);

/*___________________________________________________________________*/
/*___________________________________________________________________*/

// ! Task 6
// Foydalanuvchi 2 marta raqam kiritsin. 1-raqamni kubini, 2-raqamni kvadratiga bo'ling va consoleda chiqaring
// let num1 = prompt('1-raqam... ');
// let num2 = prompt('2-raqam... ');
// console.log(`1-raqamni kubi ${(num1 ** 3)}`);
// console.log(`2-raqamni kvadrati${(num2 ** 2)}`);

// console.log(`bolish ${(num1 ** 3) / (num2 ** 2)}`);



/*___________________________________________________________________*/
/*___________________________________________________________________*/
// ! Task 7
// Foydalanuvchi dollar qiymatini kiritsin. Kiritgan qiiymatni so'mga o'girib consoleda chiqaring
// let usd = +prompt('dollar qiymatini kiriting: ');
// let uzs = 12_897;
// let nat = ( "natija" , usd * uzs)
// alert(nat)


/*___________________________________________________________________*/
/*___________________________________________________________________*/
// ! Task 8
// Foydalanuvchi 2 marta raqam kiritsin, 2-raqam 1-raqamning necha foiziga teng ekanligi consoleda chiqarilsin
// let num1 = +prompt('1-raqam: ');
// let num2 = +prompt('2-raqam: ');
// alert (num2 / num1) * 100;

/*___________________________________________________________________*/
/*___________________________________________________________________*/
// ! Task 9
// Foydalanuvchi raqam kiritsin. kiritilgan raqamni minut deb tasavvur qiling va kiritigan minutni sekundga aylantiring
// let num = +prompt('1-raqam: ');
// alert(`natija ${num * 60}`)