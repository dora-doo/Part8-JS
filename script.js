/*form container logic*/
function displayMessage(event) {
  event.preventDefault();
  let name = document.getElementById("userName").value.trim();
  let email = document.getElementById("userEmail").value.trim();
  let password = document.getElementById("userPassword").value.trim();

  let message = document.getElementById("msg");

  if (name === "" || email === "" || password === "") {
    message.innerHTML = "Please fill in all fields.";
    message.style.color = "red";
  } else {
    message.innerHTML = `Welcome <strong>${name}</strong>!<br>
    Please verify your details:<br>
    Email: <strong>${email}</strong><br>
    Password: <strong>${password}</strong>`;
    message.style.color = "white";
  }
}




