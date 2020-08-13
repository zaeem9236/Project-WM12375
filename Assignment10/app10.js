function add() {
    var tasks = document.getElementById("text-input").value;
    if (tasks != "") {

        var key = firebase.database().ref('/ToDo-App').push().key;//console.log("key from add fn = "+key);

        var row = document.createElement("li");
        row.setAttribute("id", key);
        row.setAttribute("class", "li");
        var text = document.createTextNode(tasks);
        var row_key = document.createTextNode(key);
        // console.log(row);

        var editButton = document.createElement("button");
        editButton.setAttribute("class", "btn btn-outline-warning");
        editButton.setAttribute("onClick", "edit(this)");
        var editButtonText = document.createTextNode("Edit");
        editButton.appendChild(editButtonText);
        // console.log(editButton);


        var delButton = document.createElement("button");
        delButton.setAttribute("class", "btn btn-outline-danger");
        delButton.setAttribute("onClick", "del(this)");
        var delButtonText = document.createTextNode("Delete");
        delButton.appendChild(delButtonText);

        row.appendChild(text);
        row.appendChild(editButton);
        row.appendChild(delButton);

        //    console.log(row);
        document.getElementById("list").appendChild(row);
        document.getElementById("text-input").value = "";

        var task_object = {
            key: key,
            task: tasks
        }
        firebase.database().ref('/ToDo-App/' + key).set(task_object);

    } else {
        alert("Write some thing...");
    }

}

function edit(x) {
    var newTask = prompt("Edit Your Task", x.parentNode.childNodes[0].nodeValue);
    x.parentNode.childNodes[0].nodeValue = newTask;
    var key = (x.parentNode.getAttribute('id'));
    firebase.database().ref('/ToDo-App/' + key + '/task/').set(newTask);
    // console.log(key);


}

function del(x) {
    var key = (x.parentNode.getAttribute('id'));
    firebase.database().ref('/ToDo-App/' + key).remove();
    x.parentNode.remove();//console.log("key from del fn = "+key);

}

function deleteAll(x) {
    var x = document.getElementById("list").innerHTML = "";
    firebase.database().ref('/ToDo-App/').remove();

}

function pageRefresh() {
    firebase.database().ref('/ToDo-App/').once('value', function (data) {

        // console.log(Object.entries(data.val()));
        var key = [];
        var value = [];
        var dataBaseEmpty = false;

        try {
            if (Object.entries(data.val())) { }
        } catch (e) {
            console.log("Data base is empty");
            dataBaseEmpty = true;
        }

        if (dataBaseEmpty === false) {
            for (var number_of_entries = 0; number_of_entries < Object.entries(data.val()).length; number_of_entries++) {
                key[number_of_entries] = Object.keys(data.val())[number_of_entries];
                value[number_of_entries] = Object.values(data.val())[number_of_entries].task;
                //console.log(value[number_of_entries]);
            }




            for (var i = 0; i < Object.entries(data.val()).length; i++) {
                var row = document.createElement("li");
                row.setAttribute("id", key[i]);
                row.setAttribute("class", "li");
                var text = document.createTextNode(value[i]);
                var row_key = document.createTextNode(key[i]);
                // console.log(row);

                var editButton = document.createElement("button");
                editButton.setAttribute("class", "btn btn-outline-warning");
                editButton.setAttribute("onClick", "edit(this)");
                var editButtonText = document.createTextNode("Edit");
                editButton.appendChild(editButtonText);
                // console.log(editButton);


                var delButton = document.createElement("button");
                delButton.setAttribute("class", "btn btn-outline-danger");
                delButton.setAttribute("onClick", "del(this)");
                var delButtonText = document.createTextNode("Delete");
                delButton.appendChild(delButtonText);

                row.appendChild(text);
                row.appendChild(editButton);
                row.appendChild(delButton);

                //    console.log(row);
                document.getElementById("list").appendChild(row);
            }
        }
    })


}


