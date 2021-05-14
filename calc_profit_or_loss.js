// >>>     Write a  program to calculate profit or loss.

var bp=40, sp=50, pr, ls

pr = sp - bp

ls = bp - sp

if(sp>bp)
document.write("The profited amount is "+ pr)

else if(bp>sp)
document.write("The loss amount is "+ ls)
