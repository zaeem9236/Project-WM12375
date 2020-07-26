function add() {
    var tasks = document.getElementById("text-input").value;
    if (tasks != "") {
        var row = document.createElement("li");
        row.setAttribute("id", "li");
        row.setAttribute("class", "li");
        var text = document.createTextNode(tasks);

        var editButton = document.createElement("button");
        editButton.setAttribute("class", "btn btn-outline-warning");
        editButton.setAttribute("onClick", "edit(this)");
        var editButtonText = document.createTextNode("Edit");
        editButton.appendChild(editButtonText);

        var delButton = document.createElement("button");
        delButton.setAttribute("class", "btn btn-outline-danger");
        delButton.setAttribute("onClick", "del(this)");
        var delButtonText = document.createTextNode("Delete");
        delButton.appendChild(delButtonText);

        row.appendChild(text);
        row.appendChild(editButton);
        row.appendChild(delButton);

           console.log(row);
        document.getElementById("list").appendChild(row);
        document.getElementById("text-input").value = "";
    } else {
        alert("Write some thing...");
    }

}

function edit(x) {
    var newTask = prompt("Edit Your Task", x.parentNode.childNodes[0].nodeValue);
    x.parentNode.childNodes[0].nodeValue = newTask;
}

function del(x) {
    x.parentNode.remove();
}

function deleteAll() {
    var x = document.getElementById("list").innerHTML = "";
    // console.log(x);

}














// function editRow(){
//     alert("edit button pressed");
// }

// function deleteRow(){
//     alert("delete button pressed");
// }