// >>>     Write a  program to input week number and print week day.
// day = 1

// 1 => monday
// 2 => tuesday
// 3 => wednesday
// 4 => thursday
// 5 => friday
// 6 => saturday
// 7 => sunday


var key = 5

// var key = parseInt(prompt("Pls input the number"))

switch (key) {

    // case 0:
    //     document.write("This is Sunday")
    //     break; 

    case 1:
            document.write("This is Monday")
            break;    

    case 2:
        document.write("This is Tuesday")
        break;

    case 3:
        document.write("This is Wednesday")
        break;

    case 4:
        document.write("This is Thursday")
        break;

    case 5:
        document.write("This is Friday")
        break;

    case 6:
        document.write("This is Saturday")
        break;

    case 7  :
        document.write("This is Sunday")
        break;    


    default:
        document.write("Pls select numbers between 1-7")

        break;
}