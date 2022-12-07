//Решить используя промисы и async/await
//Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
//Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
//С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
const prom1 = new Promise((resolve, reject) => {
    setTimeout(resolve, Math.floor(Math.random() * 5000), 1)
})
const prom2 = new Promise((resolve, reject) => {
    setTimeout(resolve, Math.floor(Math.random() * 5000), 2)
})
const prom3 = new Promise((resolve, reject) => {
    setTimeout(resolve, Math.floor(Math.random() * 5000), 3)
})
Promise.race([prom1, prom2, prom3])
.then(data => {
    console.log(`Task#1 - ${data}`)
})

//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
//Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и 
//выводить на экран.

async function getNum() {
const promis = await new Promise((resolve) => {
        setTimeout(resolve, 3000, Math.floor(Math.random() * (5 - 1 + 1)) + 1)
    })
console.log(`Task#2 result of promise - ${promis}`);
return promis
} 

async function waitForIt() {     
const a = await getNum();
let kvadrat = Math.pow(a, 2);
console.log(`kvadrat - ${kvadrat}`)
return kvadrat
}
waitForIt()

//Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
//Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
//Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, 
//а затем найдет сумму полученных чисел и выводит на экран.
async function getNum1() {
    const promis1 = await new Promise((resolve) => {
        setTimeout(resolve, 3000, Math.floor(Math.random() * (5 - 1 + 1)) + 1)
        })
    console.log(`Task#3 result of promise1 - ${promis1}`);
    return promis1
    } 
async function getNum2() {
        const promis2 = await new Promise((resolve) => {
            setTimeout(resolve, 3000, Math.floor(Math.random() * (10 - 6 + 1)) + 6)
            })
        console.log(`Task#3 result of promise2 - ${promis2}`);
        return promis2
        } 

async function waitForIt2() {
    const n = await getNum1();
    const m = await getNum2();
    let summa = n + m;
console.log(`summa - ${summa}`)
return summa
} 
waitForIt2()