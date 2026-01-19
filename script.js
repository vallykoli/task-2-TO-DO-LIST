function createAccount() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Account created! Now login.");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (
    user === localStorage.getItem("user") &&
    pass === localStorage.getItem("pass")
  ) {
    alert("Login successful 🎉");
  } else {
    alert("Wrong username or password");
  }
}
