// >>>     Write a  program to input all sides of a triangle and check whether triangle is valid or not.


// var a = parseInt(prompt("Enter value of side a"))
// var b = parseInt(prompt("Enter value of side b"))
// var c = parseInt(prompt("Enter value of side c"))


var a = 3,b = 4,c = 5


if(a+b > c && b+c > a && c+a > b){
    document.write("This is a triangle")
}else{
    document.write("This is not a triangle")
}
