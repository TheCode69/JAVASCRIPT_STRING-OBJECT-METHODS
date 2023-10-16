
    /*Write a js program that prompts the user to enter three numbers,
    compare the three numbers and display on an alertbox the greatest of the three*/

    
        function eventHandler(){
            let number_1 = prompt("ENTER A NUMBER BETWEEN 0-9: ");
            let number_2 = prompt("ENTER A NUMBER BETWEEN 0-9: ");
            let number_3 = prompt("ENTER A NUMBER BETWEEN 0-9: ");
            
            if(number_1 > number_2 && number_1 > number_3){

                 alert(number_1);
            }
            else if (number_2 > number_3 && number_2 > number_1)
            {

                 alert(number_2);
            } 
            else if (number_3 > number_2 && number_3 > number_1)
            {

                 alert(number_3);
            }

            else {
                 confirm("ARE YOU SATISFIED WITH THE RESULTS???:")

            }
        }
        eventHandler();
  
