document.getElementById("verifyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("authId").value.trim();
  const pass = document.getElementById("password").value.trim();
  const dept = document.getElementById("department").value;
  const msg = document.getElementById("msg");

  if (id === "authority@civicsense.com" && pass === "admin123" && dept !== "") {
    msg.style.color = "green";
    msg.innerText = "Authority verified successfully! Redirecting...";

    // Redirect after 1.5 seconds
    setTimeout(() => {
      window.location.href = "dash.html";
    }, 1500);
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid authority credentials.";
  }
});
