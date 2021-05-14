// >>>     Write a  program to input any alphabet and check whether it is vowel or consonant.		


// var a = prompt("Enter the input")
var a = e

var lower_case_vowel = (a=='a' || a=='e' || a=='i' || a=='o' || a=='u')
var upper_case_vowel = (a=='A' || a=='E' || a=='I' || a=='O' || a=='U')

if(lower_case_vowel )
     document.write("The input is a vowel")
else if((a>='a' && a<='z') || (a>='A' && a<='Z') )
     document.write("The input is a consonant")
else     
     document.write("The input is invalid")
    