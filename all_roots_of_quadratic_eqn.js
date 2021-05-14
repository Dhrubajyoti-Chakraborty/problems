// >>>     Write a  program to find all roots of a quadratic equation.

// if discriminant > 0, root1 =-(b + root-over(b^2 - 4ac))/2a  , root2 = (-b - root-over(b^2 - 4ac))/2a

// if discriminant = 0, root1 = root2 = -b/2a

// if discriminant < 0, roots are imaginary

// ===================

// x = b^2 - 4ac

// if x=0, only one root

// if x>0, roots are distinct
// (-b+x)/2a & (-b-x)/2a

// if x<0, roots are imaginary

var a,b,c,x,r1,r2
// a = parseInt(prompt("Pls enter the value of co-efficient"))
// b = parseInt(prompt("Pls enter the value of co-efficient"))
// c = parseInt(prompt("Pls enter the value of co-efficient"))
a=1, b= 4, c=4

x= b*b - 4*a*c


r1 = (-b-Math.sqrt(x))/2*a

r2 = (-b+Math.sqrt(x))/2*a

if(x>0)
document.write("Roots are inequal"+ r1 + ","+r2)

else if(x<0)
document.write("Roots are imaginary")

else if  (x==0)
r1=r2= -b / (2 * a)
document.write("Roots are equal"+r1+"or"+r2)

