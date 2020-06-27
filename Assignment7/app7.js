function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearScreen(){
    var result = document.getElementById("result");   
    result.value = "";
}

function displayOutput(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}