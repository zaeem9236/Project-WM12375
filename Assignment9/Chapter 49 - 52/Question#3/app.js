function removeRow(index){
    var rowNumber = document.getElementById("indexNo"+index).innerHTML;
    document.getElementById(rowNumber).style.display = "none";
}

function edit(index){
    var studentName = prompt("Enter Student Name",document.getElementById("studentName"+index).innerHTML);
    var studentClass = prompt("Enter student Class",document.getElementById("studentClass"+index).innerHTML);
    document.getElementById("studentName"+index).innerHTML = studentName;
    document.getElementById("studentClass"+index).innerHTML = studentClass;
}