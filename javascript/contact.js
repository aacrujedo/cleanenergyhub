function validateForm() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    var emailError = document.getElementById("emailError");
    if (emailRegex.test(email)) {     
        emailError.innerHTML = "";
        alert("Your response has been sent!");
    } else {
        emailError.innerHTML = "Please enter a valid email address.";
    }
}