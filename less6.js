//#1 Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
console.log('task 1');
let str = '123456';
let num1 = (Number(str[0])+Number(str[1])+Number(str[2]));
let num2 = (Number(str[3])+Number(str[4])+Number(str[5]));
if(num1 == num2) {
    console.log ('yes');
} else
    console.log ('no');

// 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.
console.log('task 2');
let n = 1000, num = 0;
while(n >= 50){
    n = n/2;
    num++;
}
console.log(num);

// 3. Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
console.log('task 3');
const arr = [12, 15, 20, 25, 59, 79];
let avr = arr.reduce((a,b) => a + b, 0) / arr.length;
console.log(avr)

// 4. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log('task 4');
const ar4 = [1, 2, 3, 4, 5];
ar4.splice(3, 0, 'a', 'b', 'c');
console.log(ar4);

// 5. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log('task 5');
const ar5 = [1, 2, 3, 4, 5];
ar5.splice(1, 0, 'a', 'b');
ar5.splice(6, 0, 'c');
ar5.push('e');
console.log(ar5);

// 6. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
console.log('task 6');
const ar6 = [3, 4, 1, 2, 7];
console.log(ar6.sort((a , b) => a-b));