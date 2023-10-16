
    /* 1.Write a js function that reverses a number */
   
        function reversedFunction(number)
            {
                const reversedNumber = parseInt(number.toString().split("").reverse().join(''));
                return reversedNumber;
            }
            let number = "12345";
            let reversed = reversedFunction(number);
    document.write("The Original Number is: "  + number  + "<br>");
    document.write("The Reversed Number is: " + reversed);
    