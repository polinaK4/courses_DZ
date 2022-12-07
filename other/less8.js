// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
console.log('===Task 1===');
function revers(a1, a2, a3, a4, a5, a6) {
let array1 = new Array(a1, a2, a3, a4, a5, a6);
const arrReversed = array1.reverse();
return arrReversed;
}
console.log(revers(1,2,3,4,5,6));

// 2. найти максимальное значение числа в массиве ([3,67,15...])
console.log('===Task 2===');
function findMax(b1, b2, b3, b4, b5) {
let array2 = new Array(b1, b2, b3, b4, b5);
const arrMax = Math.max(...array2);
console.log(arrMax);
return(arrMax); 
 };
 findMax(11,222,113,14,25);

// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
//note: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
console.log('===Task 3===');
function getFib(n) {
    return n <= 1 ? n : getFib (n - 1) + getFib(n - 2) 
}
console.log(getFib(8));

// 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и 
//позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
console.log('===Task 4===');
 let i = 0;
 let j = 0;
 let znachPoz = 0;
 let znach = 0;
 function dwaChisla(g,h) {
for(i=0; i<g.length; i++) {
    for(j=0; j<h.length; j++) {
        if (i === j && g[i] === h[j]) {
            znachPoz++
        }
        if (g[i] === h[j]) {
            znach++
        }
    }
 }
 let result = (`by value&position - ${znachPoz}, by value - ${znach}`);
 return(result); 
}
 console.log(dwaChisla('3487','3794'));

//5. сортировка массива по возрастанию/убыванию
console.log('===Task 5===');
function arraySort(c1, c2, c3, c4, c5) {
let array5 = new Array(c1, c2, c3, c4, c5);
const sort1 = array5.sort(((a, b) => a - b));
console.log(sort1);
const sort2 = array5.sort(((a, b) => b - a));
console.log(sort2);
return(sort2); 
}
arraySort(11,3,9,5,6);

// 6. удалить из массива все повторяющиеся элементы
console.log('===Task 6===');
function powtor(v1, v2, v3, v4, v5, v6) {
    let array6 = new Array(v1, v2, v3, v4, v5, v6);
    const arrayDupl = array6.reduce(
        (previousValue, currentValue) => {
          if (!previousValue.includes(currentValue)) {
            return [...previousValue, currentValue];
          }
          return previousValue;
        },
        [],
      );        
    return(arrayDupl)
}
 console.log(powtor(7, 1, 7, 7, 7, 1));