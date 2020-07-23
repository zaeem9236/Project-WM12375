function button(){
    // document.getElementById("container").style.display = "none";
    var first_name = document.getElementById("firstname").value;console.log(first_name);
    var last_name = document.getElementById("lastname").value;console.log(first_name);
    var email = document.getElementById("email").value;console.log(first_name);
    var password = document.getElementById("password").value;console.log(first_name);
    var c_password = document.getElementById("c_password").value;console.log(first_name);
    document.write("<h1>form submission result</h4>");
    document.write("<h4> first_name : "+first_name+"</h4>");
    document.write("<h4> last_name : "+last_name+"</h4>");
    document.write("<h4> email : "+email+"</h4>");
    document.write("<h4> password : "+password+"</h4>");
    document.write("<h4> confirm Password : "+c_password+"</h4>");
}