var imgArray = ["images/others/1.jpg", "images/others/2.jpg", "images/others/3.jpg",
    "images/others/4.png", "images/others/5.jpg", "images/others/6.jpg", "images/others/7.png",
    "images/others/8.jpg", "images/others/9.jpg", "images/others/10.jpg", "images/others/11.jpg",
    "images/others/12.jpg", "images/others/13.jpg", "images/others/14.png", "images/others/15.jpg"];

var imageSection = document.getElementById("imageSection");
for (var i=0; i <= 14; i++) {
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', imgArray[i]);
    imageElement.setAttribute('id', i);
    imageElement.setAttribute('class', "modal-close");
    imageElement.setAttribute('onClick', "display("+i+")");
    imageSection.appendChild(imageElement);
    console.log(imageSection);
}


function display(id){
    var selectedPicture = document.getElementById(id);
    selectedPicture.setAttribute("class", "modal-open");
    // alert(selectedPicture);
}

// Unable to understant rest of question