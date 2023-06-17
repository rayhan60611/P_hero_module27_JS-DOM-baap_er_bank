document.getElementById("btn-login").addEventListener("click", function () {
  const inputEmail = document.getElementById("input-email");
  const inputPassword = document.getElementById("input-password");
  console.log(inputEmail.value, inputPassword.value);

  if (inputEmail.value == "" && inputPassword.value == "") {
    alert("Please Enter Some Credentials");
  } else if (
    inputEmail.value == "mmrp@gmail.com" &&
    inputPassword.value == "1234"
  ) {
    window.location.href = "bank.html";
  } else {
    alert("Invalid Credentials!!!!");
  }
});
