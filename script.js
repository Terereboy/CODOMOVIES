function redirectToForm() {
    var formSection = document.getElementById('formulario');
    formSection.style.display = 'block';
    formSection.scrollIntoView({ behavior: 'smooth' });
}

function validateForm() {
    var email = document.forms["subscriptionForm"]["email"].value;
    var errorElement = document.getElementById("error");

    if (!validateEmail(email)) {
        errorElement.textContent = "Por favor ingrese un correo electrónico válido.";
        return false;
    }

    errorElement.textContent = "";
    showAlert();
    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function showAlert() {
    alert("Gracias por contactarte con Codo Movies, un asesor se comunicará a la brevedad.");
    
}
window.onload = showAlert;

