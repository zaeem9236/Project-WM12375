function removeRow(index){
    var rowNumber = document.getElementById("indexNo"+index).innerHTML;
    document.getElementById(rowNumber).style.display = "none";
}