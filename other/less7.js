//1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза.
// У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
console.log('=====Task 1=====');
let sum1 = 0;
let sum2 = 0;
let brosokI1 = 0;
let brosokI2 = 0;

for (let i = 0; i < 3; i++) {
    function igrok1(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        brosokI1 = Math.floor(Math.random() * (max - min + 1) + min); //знаю что можно сократить код если сразу писать sum1 = sum1 + Math.floor(Math.random() * (max - min + 1) + min), то так зато удобно все видно в консоли
        return brosokI1;
    }
    console.log(igrok1(1, 6));
    sum1 = sum1 + brosokI1
}
console.log(`broski igroka1 - ${sum1}`);

for (let y = 0; y < 3; y++) {
     function igrok2(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         brosokI2 = Math.floor(Math.random() * (max - min + 1) + min);
         return brosokI2;
     }
     console.log(igrok2(1, 6));
    sum2 = sum2 + brosokI2
 }
console.log(`broski igroka2 - ${sum2}`);

if (sum1>sum2) {
    console.log('Igrok1 WIN!!');
} else if (sum1<sum2) {
    console.log('Igrok2 WIN!!');
} else console.log('Friendship WIN!!');

//2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня.
console.log('=====Task 2=====');
let count = 0;
let dateX = new Date(Date.UTC(2000, 0, 1));
console.log(`from: ${dateX}`);
const dateNow = new Date();
const [month, day, year] = [dateNow.getMonth(), dateNow.getDate(), dateNow.getFullYear()];
console.log(`to: ${dateNow}`);

while (dateNow.valueOf() > dateX.valueOf()) {
    function plusDni() {
        dateX.setDate(dateX.getDate() + 1);
        return (dateX);
    }
    plusDni();

        if (dateX.getDate() == 13 && dateX.getDay() == 5) {
                count++;
            }
}
console.log(`the number of Fridays 13: ${count}`);

//3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
// Пример: разбить 15 на 3 части (сумма трех чисел будет равна 15) (4,6,5)
//а. числа изначальное число целое, числа разбивки - целые (4,6,5)
console.log('=====Task 3a=====');
let number = 20;
let rnum1 = 0;
console.log(`number- ${number}`);
for (let x = 1; x <= 2; x++) {
    function randomchik(number) {
        rnum1 = Math.floor(Math.random() * number);
        return rnum1;
    }
    console.log(`${x} part - ${randomchik(number)}`);
    number -= rnum1;
}
console.log(`3rd part - ${number}`);

//б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
console.log('=====Task 3b=====');
let number2 = 20;
let rnum2 = 0;
console.log(`number- ${number2}`);
for (let x = 1; x <= 2; x++) {
    function randomchik2(number2) {
        rnum2 = (Math.random() * number2);
        return rnum2.toFixed(2);
    }
    console.log(`${x} part - ${randomchik2(number2)}`);
    number2 -= rnum2;
}
console.log(`3rd part - ${number2.toFixed(2)}`);