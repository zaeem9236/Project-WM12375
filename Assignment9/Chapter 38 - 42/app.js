                               /* ----------------------------------------------------------------------
                               ------------------------------Assignment # 38 - 44-----------------------
                               ------------------------------------------------------------------------*/


/*------ Question 1. ------*/
    // var a = 5;
    // var b = 3;
    // power(a,b);

    // function power(a,b){
    //     var result = Math.pow(a,b);
    //     document.write("Result = "+result);
    // }



/*------ Question 2. ------*/
    // var userYear = prompt("Enter any year");
    // var result = Number.isInteger(userYear/4);
    // if (result===true){
    //     alert(userYear+" is Leap Year");
    // }else{
    //     alert(userYear+" is Not Leap Year");
    // }



/*------ Question 3. ------*/
    // var a = 3;
    // var b = 4;
    // var c = 5;
    // var S = half_perimeter(a,b,c);
    // var Area = calculate_area(a,b,c,S);
    // Area = Math.sqrt(Area);
    // alert("Area of triangle is "+Area);

    // function half_perimeter(a,b,c){
    //     return((a+b+c)/2);
    // }

    // function calculate_area(a,b,c,S){
    //     return(S*(S-a)*(S-b)*(S-c));
    // }



/*------ Question 4. ------*/
    // var englishMarks = 7;
    // var urduMarks = 10;
    // var scienceMarks = 8;
    // studentResult(englishMarks, urduMarks, scienceMarks);

    // function studentResult(englishMarks, urduMarks, scienceMarks){
    //     var percentage = calculatePercentage(englishMarks, urduMarks, scienceMarks);
    //     percentage = percentage.toFixed(1);
    //     var averageMarks = calculateAverageMarks(englishMarks, urduMarks, scienceMarks);
    //     averageMarks = averageMarks.toFixed(1);
    //     alert("Student averageMarks : "+averageMarks+"\r\nStudent Percentage : "+percentage);
    // }

    // function calculatePercentage(englishMarks, urduMarks, scienceMarks){
    //     return(((englishMarks+urduMarks+scienceMarks)/30) * 100);
    // }

    // function calculateAverageMarks(englishMarks, urduMarks, scienceMarks){
    //     return((englishMarks+urduMarks+scienceMarks)/3);
    // }



/*------ Question 5. ------*/
//     var str = "Application";
//     var result = findIndex(str,'c');
//     alert(result);

//     function findIndex(str,charecter){
//         for(i=0; i<=str.length; i++ ){
//         if (str[i] === charecter){
//             return(i);
//         }
//     }
// }



/*------ Question 6. ------*/
//     var str = prompt("Enter sentence");
//     document.write("Before: "+str);
//     var result = vowelDetect(str);
//     document.write("<br>After:  "+result);


//     function vowelDetect(str){
//         var newString = "";
//         str = str.toLowerCase();
//         for(i=0; i<str.length; i++ ){
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ){
//             newString = newString.concat('-');
//         }else{
//             newString = newString.concat(str[i]);
//         }
//     }
//     return(newString);

// }



/*------ Question 7. ------*/
    // var sentence = "Pleases read this application and give me gratuity";
    // consective_vowels(sentence);

    // function consective_vowels(str){
    //     str = str.toLowerCase(0);
    //     for(i=0; i<str.length; i++){
    //         switch(str[i]){
    //             case "a":
    //             case "e":
    //             case "i":
    //             case "o":
    //             case "u":
    //                 switch(str[i+1]){
    //                     case "a":
    //                     case "e":
    //                     case "i":
    //                     case "o":
    //                     case "u":
    //                         alert(str[i]+""+str[i+1]+", ");
    //                 }
    //             break;    
    //         }
    //     }
    // }




/*------ Question 8. ------*/
    // var distance = prompt("Enter Distance in Km");

    // km_to_meter(distance);
    // km_to_feet(distance);
    // km_to_inch(distance);
    // km_to_centimeter(distance);

    // function km_to_meter(distance){
    //     document.write(distance+" km"+" = "+(distance*1000)+" meters");
    // }
    // function km_to_feet(distance){
    //     document.write("<br>"+distance+" km"+" = "+(distance*3280.84)+" feets");
    // }
    // function km_to_inch(distance){
    //     document.write("<br>"+distance+" km"+" = "+(distance*39370.1)+" inch");
    // }
    // function km_to_centimeter(distance){
    //     document.write("<br>"+distance+" km"+" = "+(distance*100000)+" centimeters");
    // }
    
    
    
/*------ Question 9. ------*/
    // var overtime = prompt("Enter employee eorking time of week");
    // calculate_overtime(overtime);

    // function calculate_overtime(overtime){
    //     if (overtime > 40){
    //         var payment = (overtime - 40)*12.00;
    //         alert("over time payment is Rs "+payment);
    //     }
    // }




/*------ Question 10. ------*/
    // var cash = prompt("Enter Cash to be withdrawn");
    // cash_withdrawn(cash);

    // function cash_withdrawn(cash){
    //     var Note_100 = cash/100;
    //     Note_100 = parseInt(Note_100);
    //     var Note_50 = ((cash%100)/50);
    //     Note_50 = parseInt(Note_50);
    //     var Note_10 = (((cash%100)%50)/10);
    //     Note_10 = parseInt(Note_10);
    //     alert("100 notes: "+Note_100+ "\r\n50_notes: "+Note_50+ "\r\n10_notes: "+Note_10)
    // }








    








