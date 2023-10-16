
/* 1.Write a js function that reverses a string */
       
function reverseString(str)
{
        return str.split('').reverse().join('');
    }
    const str = "DANNY";
    const reversed = reverseString(str);
    document.write("The original string is: " + str + "<br>");
    document.write( "The reversed string is: " + reversed) ;
 