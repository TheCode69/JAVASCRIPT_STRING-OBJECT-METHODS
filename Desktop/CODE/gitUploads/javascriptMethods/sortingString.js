
  /*1.Write a js function that returns a string that  has letters in alphabetical orders*/
   
        function sortStrings(str){
            return str.split('').sort().join('');
        }
            const str = "DFGHJKLASDFGHJKIUYTREWZXCVBNM";
            const reversed = sortStrings(str);
            document.write("The original string is: " + str + "<br>");
            document.write("The sorted string is: " + reversed);
   