// part 1 
// 1 
function convertAndAdd ( str) {
  return Number (str) + 7
}

console.log ( convertAndAdd ( "123" ))



// 2 
function checkFalsy ( value ) {
  if ( !value) {
    return "Invalid"
  }
  return "Valid"
}

console.log ( checkFalsy( 0 ))

// 3
for (let i = 1; i <= 10; i++) {
  if ( i % 2 === 0 ) continue

  console.log (i)
}

// 4
function getEvens (arr) {
  return arr.filter ( num => num % 2 === 0 )
}

console.log ( getEvens([ 1, 2, 3, 4, 5 ]))

//5
function mergeArrays (arr1, arr2) {
  return [...arr1, ...arr2]
}

console.log ( mergeArrays ([1, 2, 3], [4, 5, 6]))

//6
function getDayName (num) {
  switch (num) {
    case 1 : return "Sunday"
    case 2 : return "Monday"
    case 3 : return "Tuesday"
    case 4 : return "Wednesday"
    case 5 : return "Thursday"
    case 6 : return "Friday"
    case 7 : return "Saturday"
    default : return "Invalid day"
  }
}
console.log ( getDayName ( 2))

//7
function getLengths (arr) {
  return arr.map (str => str.length)
}
console.log ( getLengths ( [ "a", "ab","abc" ] ))


//8 
function checkDivisible ( num) {
  if ( num % 3 === 0 && num % 5 === 0 ) {
    return "Divisible by both"
  } 
  else if ( num % 3 === 0 ) {
    return "Divisible by 3 only"
  } 
  else if ( num % 5 === 0 ) {
    return "Divisible by 5 only"
  } 
  else {
    return "Not divisible by 3 or 5"
  }
}

console.log ( checkDivisible (15) )

//9
const square = num => num*num

console.log (square(5))

//10
function formatPerson ({ name, age }) {
  return `${name} is ${age} years old`
}

const person = { name:'John', age:25 }
console.log (formatPerson(person))


//11
function sumAll (...numbers) {
  return numbers.reduce ( (acc, n) => acc + n, 0 )
}

console.log ( sumAll (1 ,2 ,3, 4, 5))


//12
function delayedSuccess() {
  return new Promise ((resolve) => {
    setTimeout (() => {
      resolve("Success")
    } , 3000)
  })
}

delayedSuccess().then ( message => console.log(message))


//13
function findLargest (arr) {
  return Math.max (...arr )
}

console.log (findLargest ([ 1, 3, 7, 2, 4 ]))


//14
function getKeys (obj) {
  return Object.keys (obj)
}

console.log ( getKeys ({name:"John", age:30 }))


//15

function splitWords (str) {
  return str.split (" ")
}

console.log ( splitWords ("The quick brown fox") )



