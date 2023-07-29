//Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

//Print the odd numbers less than 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    //console.log(i)
  }
}

//Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  //console.log(`7X${i}=${i*7}`)
}

//Print all the multiplication tables with numbers from 1 to 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (items of arr) {
  for (let i = 1; i <= 10; i++) {
    //console.log(`${items}X${i}=${i*items}`)
  }
}

//Calculate the sum of numbers from 1 to 10
let count = 0
for (let i = 1; i <= 10; i++) {
  count += i
}
//console.log(count)

//Calculate 10!

let count2 = 1
for (let i = 1; i <= 10; i++) {
  count2 *= i
}
//console.log(count2)

//Calculate the sum of even numbers greater than 10 and less than 30
let count3=0
for(let i = 11;i<=30;i+=2){
count3 += i
}
//console.log(count3)

//Making Functions

//Create a function that will convert from Celsius to Fahrenheit
//C = F – 32 / 1.8

function convertFahrenheit(number){
  return number*1.8+32
}
//convertFahrenheit(37.1)

//Create a function that will convert from Fahrenheit to Celsius
function convertCelsius(number) {
  return (number-32)/1.8
}
//convertCelsius(100)


//Calculate the sum of numbers in an array of numbers
function calculateArraySum(array){
  let count=0
  for(items of array){
    count+=items
  }
  return count
}
//console.log(calculateArraySum([1,2,3,4,5,6,7,8,9,10]))


//Calculate the average of the numbers in an array of numbers

function calculateArrayAverage(array) {
  let count = 0
  for (items of array) {
    count += items
  }
  return count/array.length
}
//console.log(calculateArrayAverage([1, 3, 9, 15, 90]))

//Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
//Use push() method 
function positiveArray(array){
  let positiveArr =[]
  for(items of array){
    if (items>=0) {
      positiveArr.push(items)
    }
  }
  return positiveArr
}
//console.log(positiveArray([1,2,-3,4,-5,-6,7,-8,9,10]))

//Find the maximum number in an array of numbers
function maximumNuminArray(array) {
let max = array[0]
for(let i=0;i<array.length;i++){
  if(array[i]>max){
    max=array[i]
  }
}
return max
}

//console.log(maximumNuminArray([1,2,-3,4,-5,-6,700,-8,9,10]))


//Create a function that will return a Boolean specifying if a number is prime

function checkPrime(number){
  let maxdiv=Math.sqrt(number)
  if(number>2){
  for(let i=2;i<maxdiv;i++){
    if(number%i!==0){
      return true
    }
    else{
      return false
    }
  }
  
  }
  else{
    return true
  }
}
//console.log(checkPrime(19))


//Calculate the sum of digits of a positive integer number
function calcPositive(number){
  let d = number.toString()
  let sum =0
  if (number<=0) {
    return 'Please Enter positive number'
    
  }else{
  for(item of d){
    sum+=Number.parseInt(item)
  }
  return sum
  }
 
}

//console.log(calcPositive(55))

//Print the first 100 prime numbers
function hundredPrimeNum(){
let  n = 0
let i=2
while(n<101){
  if(checkPrime(i)){
    console.log(n+" = "+i)
    n++
  }
  i++
}
}
//hundredPrimeNum()

//Create a function that will return in an array the first “p” prime numbers greater than “n”
function returnPrime(array){
  for(let i=0;i<array.length;i++){
    if (checkPrime(array[i])) {
      array[i]='p'
    }
  }
  return array
}
console.log(returnPrime([1,2,3,4,5,5,6,7,7,8,7,5,5,9]))
console.log(checkPrime(3))