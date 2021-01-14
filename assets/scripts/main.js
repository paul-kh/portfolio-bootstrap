const navCheckbox = document.querySelector(".navigation__checkbox");
const navLinks = document.querySelectorAll(".navigation__link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navCheckbox.checked = false;
  });
});

// CONTACT FORM HANDLING
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const url = "https://nodemailer-contact-form-paul.herokuapp.com/send";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  }).then((res) => {
    if (res.status === 200) {
      console.log("Email sent!!!");
      alert("Thank your for contacting me. I will get back to you soon!");
      location.reload();
    }
  });
});
