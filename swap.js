// >>>   WAP to swap values of two variables.
//             A = 10
//             B = 20 

            //LOGIC          

            // CONSOLE.LOG(A) //20
            // CONSOLE.LOG(B) //10


            var a=10,b=20;

            temp = a;
            a = b;
            b = temp;
            
            document.write("val of a ="+ a + " val of b =" + b+"<br>")

             
            // WAP to swap values of two variables without using third variable.

            
            var a=10,b=20;

            a = a+b;
            b = a-b;
            a = a-b;
            
            document.write("val of a ="+ a + " val of b =" + b)