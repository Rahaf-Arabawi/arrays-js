/******************/
/* //1// */
var number1=[1,2,3,4,5]
var number2=number1.map(myfunction)
document.write(JSON.stringify(number2))
function myfunction(value) {
    return value * 2;
  }

document.write("<br>")

/******************/
/* //2// */
var number1=[1,2,3,4,5]
var num=number1.filter(myfunction1)
document.write(num)
 function myfunction1(value){
    return value %2===0
 }

document.write("<br>")

/******************/
/* //3// */
var number=[1,2,3,4,5]
var num=number.reduce(myfunction2)
document.write(num)
function myfunction2(total,value){
    return total+value
}