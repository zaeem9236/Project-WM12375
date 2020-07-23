var num = 0;
function change(value){
    if (value === "up"){
        document.getElementById("counter").innerHTML = ++num;
    }else if (value === "down" && num > 0){
        document.getElementById("counter").innerHTML = --num;
    }
}