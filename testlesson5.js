//1
console.log('str' + true);
console.log('str' + 5);
console.log(5 + true);
console.log(5 + false);
//2
console.log('str' * true);
console.log('str' * false);
console.log('str' * 5);
console.log(5 * true);
console.log(5 * false);
//3
console.log('str' / true);
console.log('str' / false);
console.log('str' / 5);
console.log(5 / true);
console.log(5 / false);

//4
let value = true;
console.log(typeof value); //boolean
value = String(value);
console.log(typeof value); // string

//5
let str = '100';
console.log(typeof str); //num
let num = Number(str);
console.log(typeof num); // string