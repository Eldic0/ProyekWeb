function submitData() {
    //ambil data
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var date = document.getElementById("date").value
    var country = document.getElementById("country").value
    var gender = document.getElementById("gender")
    var selectedGender = ""
    var agree = document.getElementById("agree").checked

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].checked
        }
    }

    //validasi

    if (name.length == 0) {
        document.getElementById("error").innerHTML = "Name can't be empty"
    } else if (!email.endsWith('.com') || !email.includes('@') || email.indexOf('@') != email.lastIndexOf('@') || email.indexOf('@') + 1 == email.lastIndexOf('.com')) {
        document.getElementById("error").innerHTML = "Wrong email format !"
    } else if (password.length <= 6) {
        document.getElementById("error").innerHTML = "Password must be more than 6 characters !"
    } else if (selectedGender == "") {
        document.getElementById("error").innerHTML = "Please choose your gender"
    } else if (countryIdx == 0) {
        document.getElementById("error").innerHTML = "Please choose your country"
    } else if (date == "") {
        document.getElementById("error").innerHTML = "Date of Birth can't be empty"
    } else if (agree == false) {
        document.getElementById("error").innerHTML = "You have to agree to terms and conditions"
    } else {
        document.getElementById("error").innerHTML = ""
        alert("Registration Success !")
    }
}