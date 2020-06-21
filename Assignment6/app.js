                               /* -----------------------------------------------------------------------
                               ------------------------------Assignment # 21 - 25------------------------------
                               ------------------------------------------------------------------------*/


/*------ Question 1. ------*/
    // var firstName = prompt("Enter your first name");
    // var secondName = prompt("Enter your last name");
    // var fullName = firstName + " " + secondName;
    // alert(fullName);



/*------ Question 2. ------*/
    // var favoriteMobile = prompt("Enter your favourite Mobile");
    // var length = favoriteMobile.length;
    // document.write("Your favourite mobile is : "+favoriteMobile+"<br> Length of String is : " + length);



/*------ Question 3. ------*/
    // var Country = "Pakistan";
    // var indexNumber = Country.indexOf('n');
    // document.write("String: "+Country+"<br> index of 'n': "+indexNumber);
    
    
    
/*------ Question 4. ------*/
    // var Word = "Hello World";
    // var index = Word.lastIndexOf('l');
    // document.write("String: "+ Word+ "<br> Last index of 'l': "+index);



/*------ Question 5. ------*/
    // var Word = "Pakistani";
    // var char = Word.charAt(3);
    // document.write("String: "+Word+ "<br> Character at index 3: "+char);



/*------ Question 6. ------*/
    // var firstName = prompt("Enter your first name");
    // var secondName = prompt("Enter your last name");
    // var fullName = firstName.concat(" ",secondName);
    // alert(fullName);



/*------ Question 7. ------*/
    // var Word ="Hyderabad";
    // var newWord = Word.replace("Hyder", "Islam");
    // document.write("City: "+Word+ "<br> After replacement: "+newWord);



/*------ Question 8. ------*/
    // var message ="Ali and Sami are best friends. They play cricket and football together.";
    // var replace_message = message.replace(/and/g,"&");
    // document.write("Message: "+message+ "<br> After replacement: "+replace_message);



/*------ Question 9. ------*/
    // var number = "472";
    // number = parseInt(number);
    // var type = "String"; 
    // document.write("Value : "+number+ "<br> Type : "+type);
    // if (Number.isInteger(5)){
    //     type = "int";
    // }
    // document.write("<br>Value : "+number+ "<br> Type : "+type);



/*------ Question 10. ------*/
    // var input = prompt("Enter some thing");
    // document.write("User input: "+input);
    // input = input.toUpperCase();
    // document.write("<br>Upper case: "+input);
    
    
    
/*------ Question 11. ------*/
    // var input = prompt("Enter some thing");
    // document.write("User input: "+input);
    // var first_char = input.substr(0,1);
    // first_char = first_char.toUpperCase();
    // input = input.replace(input.charAt(0),first_char);
    // document.write("<br>Title case: "+input);
    
    
    
/*------ Question 12. ------*/
    // var num = 35.36;
    // document.write("Number: "+num);
    // num = num.toString();
    // var dot = num.indexOf(".");
    // num = num.replace(num[dot],"");
    // document.write("<br>Result: "+num);



/*------ Question 13. ------*/
    // var name = prompt("Enter username");
    // var detection_1 = name.indexOf("@");
    // var detection_2 = name.indexOf(".");
    // var detection_3 = name.indexOf(",");
    // var detection_4 = name.indexOf("!");
    // if(detection_1.toString() === "-1" && detection_2.toString() === "-1" && 
    // detection_3.toString() === "-1" && detection_4.toString() === "-1" ){
    //     alert("Username: "+name);
    // }else{
    //     alert("Enter a valid user name");
    // }



/*------ Question 14. ------*/
    // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var item = prompt("Enter bakery item you want");
    // item = item.toLowerCase();
    // var found = false;
    // for(i=0; i<=A.length; i++){
    //     if (item === A[i]){
    //         found = true;
    //         break;
    //     }else{
    //         found = false
    //     }
    // }

    // if(found == true){
    //     document.write(A[i] + " is available at index " +i+ " in our bakery");
    // }else{
    //     document.write("we are sorry "+item+ " is not availabale in our bakery");
    // }
    
    
    
/*------ Question 15. ------*/
   //not solved yet
//    var password = prompt("Enter password"); 
//    var letterNumber = password.match(/^[0-9a-zA-Z]+$/);
//    var condition1 = letterNumber !== null;
//    var first_char = parseInt(password[0]);
//    var condition2 = password[0].match(/^[0-9]+$/);
//    var condition3 = false;
//    if (password.length >= 6){
//        condition3 = true;
//    }else{
//        condition3 = false;
//    }
   
//    if (condition1 === true && condition2 !== "NaN" && condition3 ===true){
//        document.write("Entered password: "+letterNumber);

//    }else{
//        alert("Enter a valid password");
//    }
   
   
   
/*------ Question 16. ------*/
    // var university = "University of Karachi";
    // var result = university.split('');
    // for(i=0; i<=university.length-1; i++){
    //     document.write(result[i]+"<br>");
    // }
    
    
    
/*------ Question 17. ------*/
    // var name = prompt("Enter something");
    // document.write("User input: "+name+"<br>last character of input: "+name.charAt(name.length-1));



/*------ Question 18. ------*/
    // var sentence = "The quick brown fox jumps over the lazy dog";
    // sentence = sentence.toLowerCase();
    // var count = sentence.split("the").length-1;
    // document.write("Text: The quick brown fox jumps over the lazy dog"
    // +"<br> There are "+count+" occurence(s) of word 'the'");





                               /* --------------------------------------------------------------------
                               ----------------------------Assignment # 26 - 30-----------------------
                               ----------------------------------------------------------------------*/




/*------ Question 1. ------*/
    // var number = prompt("Enter positive interger number");
    // document.write("Number: " +number+ "<br>");
    // var round = Math.round(number);
    // document.write("round off value: " +round+ "<br>");
    // var floor = Math.floor(number);
    // document.write("floor value: " +floor+ "<br>");
    // var ceil = Math.ceil(number);
    // document.write("ceil value: " +ceil+ "<br>");



/*------ Question 2. ------*/
    // var number = prompt("Enter negative floating number");
    // document.write("Number: " +number+ "<br>");
    // var round = Math.round(number);
    // document.write("round off value: " +round+ "<br>");
    // var floor = Math.floor(number);
    // document.write("floor value: " +floor+ "<br>");
    // var ceil = Math.ceil(number);
    // document.write("ceil value: " +ceil+ "<br>");



/*------ Question 3. ------*/
    // var number = prompt("Enter a number");
    // var abs = Math.abs(number);
    // document.write("The absolute value of "+number+" is "+abs);



/*------ Question 4. ------*/
    // var number = Math.random() * 6;
    // number = Math.round(number);
    // document.write("Random dice value:"+number+"<br> Refresh page to get another value")



/*------ Question 5. ------*/
    //  var number = Math.random() * 2;
    //  number = Math.round(number);
    //  if (number === 2){
    //      document.write(number+"<br> random coin value: Heads");
    //  }else{
    //     document.write("1 <br> random coin value: Tails");
    //  }
    
    
    
/*------ Question 6. ------*/
    // var number = Math.random() * 100;
    // number  = Math.round(number);
    // document.write("random number between 1 and 100: "+number);
    
    
    
/*------ Question 7. ------*/
    // var weight = prompt("Enter your weight(Kilograms)");
    // var getNumber=weight.match(/(\d+)/);
    // document.write("your Weight is : "+getNumber[0]);
    
    
    
/*------ Question 8. ------*/
    // var secret_number = Math.random() * 10;
    // secret_number = Math.round(secret_number);
    // var usern_number = prompt("Enter a number from 1 to 10");
    // if (usern_number === secret_number.toString()){
    //     document.write("<br> Congratualations you have won the game");
    // }else{
    //     document.write("Try again");
    // }



                               /* -------------------------------------------------------------------
                               ----------------------------Assignment # 31 - 34----------------------
                               ---------------------------------------------------------------------*/



/*------ Question 1. ------*/
    // var date = new Date().toString();
    // var PST = date.replace("(West Kazakhstan Time)","(PST)");
    // document.write(PST);
    
    
    
/*------ Question 2. ------*/
    // var date = new Date();
    // var month = date.getMonth().toString();
    // switch(month) {
    //      case "0" :
    //      document.write("Current month: January");
    //      break;
    //      case "1" :
    //      document.write("Current month: February");
    //      break;
    //      case "2" :
    //      document.write("Current month: March");
    //      break;
    //      case "3" :
    //      document.write("Current month: April");
    //      break;
    //      case "4" :
    //      document.write("Current month: May");
    //      break;
    //      case "5" :
    //      document.write("Current month: June");
    //      break;
    //      case "6" :
    //      document.write("Current month: July");
    //      break;
    //      case "7" :
    //      document.write("Current month: August");
    //      break;
    //      case "8" :
    //      document.write("Current month: September");
    //      break;
    //      case "9" :
    //      document.write("Current month: October");
    //      break;
    //      case "10" :
    //      document.write("Current month: November");
    //      break;
    //      case "11" :
    //      document.write("Current month: December");
    //      break;
    //      default :
    //      document.write("invalid date");
    // }



/*------ Question 3. ------*/
    // var date = new Date();
    // var day = date.getDay().toString();
    // switch(day) {
    //      case "0" :
    //      document.write("Today is Sun");
    //      break;
    //      case "1" :
    //      document.write("Today is Mon");
    //      break;
    //      case "2" :
    //      document.write("Today is Tue");
    //      break;
    //      case "3" :
    //      document.write("Today is Wed");
    //      break;
    //      case "4" :
    //      document.write("Today is Thu");
    //      break;
    //      case "5" :
    //      document.write("Today is Fri");
    //      break;
    //      case "6" :
    //      document.write("Today is Sat");
    //      break;
    //      default :
    //      document.write("invalid day");
    // }



/*------ Question 4. ------*/
// var date = new Date();
//     var day = date.getDay().toString();
//     switch(day) {
//          case "0" :
//          document.write("It's Fun Day");
//          break;
//          case "6" :
//          document.write("It's Fun Day");
//          break;
//          default :
//          document.write("Regular day");
//     }



/*------ Question 5. ------*/
// var date = new Date();
//     var day = date.getDate().toString();
//     if (day>=1 && day<=15){
//         document.write("first Fifteen days of month");
//     }else{
//         document.write("Last days of month")
//     }



/*------ Question 6. ------*/
    // var date = new Date();
    // document.write("Current Date: "+date+"<br>");
    // var millis = date.getTime();
    // document.write("Elapsed milliseconds since January 1, 1940: "+millis+"<br>");
    // var minutes = parseInt(millis);
    // minutes = minutes/1000;
    // minutes = minutes/60
    // document.write("Elapsed minutes since January 1, 1940: "+millis+"<br>");



/*------ Question 7. ------*/
    // var date = new Date();
    // var hours = date.getHours();
    // hours = parseInt(hours);
    // if (hours>=0 && hours<=12){
    //     document.write("It's AM");
    // }else{
    //     document.write("It's PM");
    // }



/*------ Question 8. ------*/
    //  var laterDate = "Thu Dec 31 2020 00:00:00 GMT+0500 (PKT)";
    //  document.write(laterDate);



/*------ Question 9. ------*/
    // var date = new Date();
    // var till_date_millis = date.getTime();
    // var Ramadandate = new Date("June 18, 2015");
    // var Ramadan_date_millis = Ramadandate.getTime();
    // var diff= till_date_millis-Ramadan_date_millis;
    // var diffdays = diff/(1000*60*60*24);
    // diffdays= Math.round(diffdays);
    // document.write(diffdays+" days have passed since 1st Ramadan, 2015");



/*------ Question 10. ------*/
// var Refdate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
// var Refdate_millis = Refdate.getTime();
// var date_2015 = new Date("Thu Jan 01 2015 00:00:00 GMT+0500 (PKT)");
// var date_2015_millis = date_2015.getTime();
// var diff= Refdate_millis-date_2015_millis;
// var diffsec = diff/(1000);
// diffsec= Math.round(diffsec);
// document.write("On  reference date "+Refdate+",<br>"+diffsec+" seconds had passed since beginning of 2015");



/*------ Question 11. ------*/
    //  var currentDate = new Date();
    //  document.write("current date: "+currentDate);
    //  var utc_hour = currentDate.getUTCHours();
    //  currentDate.setUTCHours(utc_hour-1);
    //  document.write("<br>1 hour ago, it was "+currentDate);



/*------ Question 12. ------*/
    //  var currentDate = new Date();
    //  document.write("current date: "+currentDate);
    //  currentDate.setFullYear(2020-100);
    //  document.write("<br>100 years back, it was "+currentDate);



/*------ Question 13. ------*/
    // var date = new Date();
    // var till_date_millis = date.getTime();
    // var birthYear = parseInt(prompt("Enter your birth year"));
    // date.setFullYear(birthYear);
    // var birthDate_millis = date.getTime();
    // var diff = till_date_millis-birthDate_millis;
    // var diffYears = diff/(1000*60*60*24*30*12);
    // diffYears= Math.round(diffYears);
    // document.write("Your age is "+diffYears+"<br>Your birth Year is "+birthYear);



/*------ Question 14. ------*/
    // var CustomerName = "Zaeem";
    // var CurrentMonth = "June";
    // var NumberOfUnits = 410;
    // var ChargesPerUnit = 16;
    // var LateSurcharge = 350;
    // var NetAmount = NumberOfUnits*ChargesPerUnit;
    // var GrossAmount = NetAmount+LateSurcharge;

    // document.write("K-Electric Bill");
    // document.write("<br><br>Customer Name: "+CustomerName);
    // document.write("<br>Month: "+CurrentMonth);
    // document.write("<br>Number of unit: "+NumberOfUnits);
    // document.write("<br>Charges per unit: "+ChargesPerUnit);
    // document.write("<br><br>Net Amount Payable (within Due Date): "+NetAmount);
    // document.write("<br>Late payment surcharge: "+LateSurcharge);
    // document.write("<br>Gross Amount Payable (after Due Date): "+GrossAmount);





                               /* -------------------------------------------------------------------
                               ----------------------------Assignment # 35 - 38----------------------
                               ---------------------------------------------------------------------*/




/*------ Question 1. ------*/
    //  show_time();
    //  function show_time(){
    //      var date = new Date();
    //      document.write(date);
    //  }



/*------ Question 2. ------*/
    // greet("Zaeem","Ahmad");
    //  function greet(firstName,lastName){
    //      alert(firstName+" "+lastName);
    //  }



/*------ Question 3. ------*/
    // var Num1 = parseInt(prompt("Enter first number"));
    // var Num2 = parseInt(prompt("Enter second number"));
    // document.write("sum is : "+sum(Num1,Num2));
    //  function sum(Num1,Num2){
    //      return (Num1+Num2)
    //  }
    
    
    
/*------ Question 4. ------*/
    // var Num1 = parseInt(prompt("Enter first number"));
    // var Num2 = parseInt(prompt("Enter second number"));
    // var opr = prompt("Enter operator");
    // document.write("calculation is : "+calculation(Num1,Num2,opr));
    //  function calculation(Num1,Num2,opr){
    //      if (opr === "+"){
    //          return(Num1+Num2)
    //      }else if (opr === "-"){
    //          return(Num2-Num1)
    //      }else if (opr === "*"){
    //          return(Num1*Num2)
    //      }else if (opr === "/"){
    //          return(Num1/Num2)
    //      }else{
    //          return("Invalid operation")
    //      }
    //  }



    /*------ Question 5. ------*/
    // var Num = parseInt(prompt("Enter first number"));
    // document.write("suare is : "+square(Num));
    //  function square(Num){
    //      return (Num*Num)
    //  }
    
    
    
/*------ Question 6. ------*/
    // var Num = parseInt(prompt("Enter first number"));
    // document.write("factorial of "+Num+" is : "+factorial(Num));
    //  function factorial(Num){
    //     var ans =1
    //      for(var i=2; i<=Num; i++){
             
    //          ans=ans*i;
    //      }
    //      return (ans)
    //  }
    
    
    
/*------ Question 7. ------*/
    // var starting_num = prompt("Enter starting number");
    // var end_num = prompt("Enter ending number");
    // count(starting_num,end_num);
    // function count(starting_num,end_num){
    //     for (var i =starting_num; starting_num<=end_num; starting_num++){
    //         document.write("<br>"+starting_num)
    //     }
    // }



/*------ Question 8. ------*/
    // var base = prompt("Enter triangle base");
    // var perp = prompt("Enter triangle perpendicular");
    // document.write("Hypotenuse of Triangle is : "+calculate(base,perp));

    // function calculate(base,perp){
    //    var B = square(base);
    //    var P = square(perp);
    //    var H = B+P;
    //     H = Math.sqrt(H);
    //    return(H); 
    //     function square(num){
    //         return(num*num);
    //     }
    // }
    
    
    
/*------ Question 9. ------*/
    // var width = prompt("Enter width of rectangle");
    // var height = prompt("Enter height of rectangle");

    // document.write("Area of rectangle (arguement as value)"+area(20,50));
    // document.write("<br>Area of rectangle (arguement as variable)"+area(width,height));

    // function area(width,height){
    //     return(width*height);
    // }



/*------ Question 10. ------*/
    // var word = prompt("Enter any word");
    // if(palindrome(word)===true){
    //     document.write(word+" is a palindrome word");
    // }else{
    //     document.write(word+" is NOT a palindrome word");

    // }
    // function palindrome(word){
    //     var length = word.length;
    //     for(var i=0; i<=length; i++){
    //         if(word[i] !== word[length-1-i]){
    //             return(false);
    //         }
    //     }
    //     return(true);
    // }
    
    
    
/*------ Question 11. ------*/
    // var input = "the quick brown fox";
    // document.write("String : "+input+"<br>")
    //  document.write("Output: "+convert(input));
    
    // function convert(input){
    //     var string_length = input.length;
    //      for (var i=0; i<=string_length-1; i++){
    //          if(input[i].includes(" ") !== false || i===0){
    //             if(i===0){
    //              var char = input[i];
    //              char = char.toUpperCase();
    //              input = input.replace(input.charAt(i),char);
    //             }else{
    //               var char = input[i+1];
    //               char = char.toUpperCase();
    //               input = input.replace(input.charAt(i+1),char);
    //             }
                 
    //          }
            
    //      }
    //      return(input);
 
    // }
    
    
    
/*------ Question 12. ------*/
    // var input = "Web Development Tutorial";
    // document.write("String: "+input+"<br>");
    // document.write("Output: "+longest(input));

    // function longest(input){
    //     var string_lenght = input.length;
    //     var word = input.split(" ");
    //     var longest_word;
    //     for(var i=0; i<=word.length-1; i++){
    //         if(word[i].length > word[word.length-1].length){
    //             longest_word = word[i];
    //         }
    //     }    
    //     return(longest_word);
    // }
    
    
    
/*------ Question 13. ------*/
    // var input = "JSResourceS.com";
    // var letter = "o";
    // document.write("String : "+input+"<br>");  
    // document.write("Count of letter '"+letter+"' : "+search(input,letter))

    // function search(input,letter){
    //     var string_length = input.length;
    //     var letter_count = 0;
    //     for (var i=0; i<=string_length-1; i++){
    //         if(input[i].includes(letter) !== false){
    //             letter_count++;
    //         }
    //     }
    //     return(letter_count);
    // }



/*------ Question 14. ------*/
    // var radius = 5;
    // document.write("<br>The circumference is "+calcCircumference(radius));
    // document.write("<br>The area is "+calcArea(radius));

    // function calcCircumference(radius){
    //     return(2 * 3.14159 * radius)
    // }
    
    // function calcArea(radius){
    //     return(3.14159 * Math.pow(radius,2));
    // }






     