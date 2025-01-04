/******************/
/* //1// */
var number1=[1,2,3,4,5]
document.write(number1.length);

document.write("<br>")

/******************/
/* //2// */
var number=[1,2,3,4,5]
for(var number of number){
   document.write(number+",")
    }

document.write("<br>")

/******************/
/* //3// */
var array=[1,2,3,4,5]
for(var index in array){
    if(index==array.length-1){
        document.write(array[index])
    }else{
        document.write(array[index]+",")  
    }}

document.write("<br>")

/******************/
/* //4// */    
var number=[1,2,3,4,5]
var isArray=Array.isArray(number)
 document.write(isArray)

document.write("<br>")

/******************/
/* //5// */
var arraylike={0:"a", 1:"b", 2:"c", length: 3}
var array=Array.from(arraylike)
var array=JSON.stringify(array)
document.write(array)

document.write("<br>")

/******************/
/* //6// */
var number=[1,2,3,4,5]
var result=[]
number.forEach(function(number){
   result.push(number)
})
result.push(6);
document.write(JSON.stringify(result));