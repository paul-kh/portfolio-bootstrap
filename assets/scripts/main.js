// NAVIGATION HANDLING
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
  window.scrollTo(0, 0);

  // Show message box
  const backdrop = document.querySelector(".backdrop");
  const messagebox = document.querySelector(".messagebox");
  backdrop.classList.add("backdrop--open");
  messagebox.classList.add("messagebox--open");

  // Send mail data to server
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
    }
  });
});

// BACKDROP & MESSAGE BOX HANDLING
const backdrop = document.querySelector(".backdrop");
const messagebox = document.querySelector(".messagebox");
const messageboxButtonClose = document.querySelector(
  ".messagebox__close-button"
);

messageboxButtonClose.addEventListener("click", () => {
  backdrop.classList.remove("backdrop--open");
  messagebox.classList.remove("messagebox--open");
});
backdrop.addEventListener("click", () => {
  messagebox.classList.remove("messagebox--open");
  backdrop.classList.remove("backdrop--open");
});
