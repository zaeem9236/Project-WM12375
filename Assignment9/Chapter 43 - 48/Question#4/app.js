function changeImage(str) {
    if (str === "new") {
        document.getElementById("mobilePic").src = "Images/available colors.jpg"
    } else if (str === "old") {
        document.getElementById("mobilePic").src = "Images/front.jpg"

    }
}

