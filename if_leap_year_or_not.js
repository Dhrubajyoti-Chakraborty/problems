// >>>     Write a  program to check whether a year is leap year or not.
// 4 100 400

var a = 2021

if(a%4==0 || a%100==0 || a%400==0){
    document.write("The number is leap year")
}else{
    document.write("The number is not a leap year")
}