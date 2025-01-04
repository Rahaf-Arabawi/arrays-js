/******************/
/* //1// */
var number1=[1,2,3]
var number2=[4,5,6]
var number=number1.concat(number2)
document.write(JSON.stringify(number))

document.write("<br>")

/******************/
/* //2// */
var number1=[1,2,3,4,5]
document.write(number1.indexOf(1)+1,
number1.indexOf(2)+1,
number1.indexOf(3)+1,
number1.indexOf(4)+1,
number1.indexOf(5)+1,
)

document.write("<br>")

/******************/
/* //3// */
var number=[1,2,3,4,5,6]
 document.write(JSON.stringify(number.slice(0,2).concat(number.slice(4,6))) ) 

 document.write("<br>")

/******************/
/* //4// */
var number=[1,2,3,4,5]
number.splice(0,1)
number.splice(1,4)
document.write(number)

 document.write("<br>")

/******************/
/* //5// */
var number="1, 2, 3, 4, 5"
document.write(number.split(','))

document.write("<br>")

/******************/
/* //6// */
var number=[1, 2, 3, 4, 5]
document.write(number.join(""))

document.write("<br>")

/******************/
/* //7// */
var number=Array.of(1,2,3)
document.write(JSON.stringify (number))

document.write("<br>")

/******************/
/* //8// */
var number=[1, 2, 3, 4, 5]
document.write(JSON.stringify(number.fill(0,0,3)))

document.write("<br>")

/******************/
/* //9// */
var num=[1, 2, 3, 4, 5]
num.copyWithin(1,0,1);
document.write(JSON.stringify(num.copyWithin(2,0,1)));

document.write("<br>")

/******************/
/* //10// */
var fruits=["apple", "banana", "cherry"]
fruits.sort();
document.write(JSON.stringify(fruits))

document.write("<br>")

/******************/
/* //11// */
var fruits=["apple", "banana", "cherry"];
fruits.reverse();
document.write(JSON.stringify(fruits))