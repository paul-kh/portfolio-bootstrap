const node = document.getElementById("node");
const mongodb = document.getElementById("mongodb");
const mysql = document.getElementById("mysql");
const js = document.getElementById("javascript");
const react = document.getElementById("react");
const bootstrap = document.getElementById("bootstrap");
const css = document.getElementById("css");
const sass = document.getElementById("sass");
const jquery = document.getElementById("jquery");
const git = document.getElementById("git");
const jest = document.getElementById("jest");
const scrum = document.getElementById("scrum");
const toolName = document.getElementById("tool-name");
const toolDesc = document.getElementById("tool-desc");
const toolLogo = document.getElementById("tool-logo");
const skillLevel = document.getElementById("skill-level");

// Default active tool = Node
toolName.innerHTML = "Node JS";
toolDesc.innerHTML =
  "An open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.";
skillLevel.innerHTML = "4 / 5";
toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/nodejs.png");
toolLogo.setAttribute("alt", "Node JS");

// NODE JS
node.addEventListener("click", () => {
  toolName.innerHTML = "Node JS";
  toolDesc.innerHTML =
    "An open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.";
  skillLevel.innerHTML = "4 / 5";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/nodejs.png");
  toolLogo.setAttribute("alt", "Node JS");
});

// MONGODB
mongodb.addEventListener("click", () => {
  toolName.innerHTML = "Mongodb";
  toolDesc.innerHTML =
    "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.";
  skillLevel.innerHTML = "3.5 / 5";
  toolLogo.setAttribute(
    "src",
    "./assets/images/tool-logo-bg-white/mongodb.png"
  );
  toolLogo.setAttribute("alt", "Mongodb");
});

// MYSQL
mysql.addEventListener("click", () => {
  toolName.innerHTML = "MySQL";
  toolDesc.innerHTML =
    "An open-source relational database management system - DBMS.";
  skillLevel.innerHTML = "3.5 / 5";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/mysql.png");
  toolLogo.setAttribute("alt", "MySQL");
});

// REACT
react.addEventListener("click", () => {
  toolName.innerHTML = "React JS";
  toolDesc.innerHTML =
    "An open-source, front end, JavaScript library for building UI components. It can be used as a base in the development of single-page or mobile applications.";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/react.png");
  toolLogo.setAttribute("alt", "React JS");
});

// JAVASCRIPT
js.addEventListener("click", () => {
  toolName.innerHTML = "JavaScript";
  toolDesc.innerHTML =
    "Node module that make life better dealing with Http requests.";
  skillLevel.innerHTML = "4.5 / 5";
  toolLogo.setAttribute(
    "src",
    "./assets/images/tool-logo-bg-white/javascript.png"
  );
  toolLogo.setAttribute("alt", "JavaScript");
});

// BOOTSTRAP
bootstrap.addEventListener("click", () => {
  toolName.innerHTML = "Bootstrap";
  toolDesc.innerHTML =
    "CSS framework ideal for responsive, mobile-first web development.";
  skillLevel.innerHTML = "4.5 / 5";
  toolLogo.setAttribute(
    "src",
    "./assets/images/tool-logo-bg-white/bootstrap.png"
  );
  toolLogo.setAttribute("alt", "Bootstrap");
});

// CSS
css.addEventListener("click", () => {
  toolName.innerHTML = "css";
  toolDesc.innerHTML =
    "A style sheet language used for describing the presentation of a document written in HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.";
  skillLevel.innerHTML = "4.5 / 5";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/css.png");
  toolLogo.setAttribute("alt", "css");
});

// SASS
sass.addEventListener("click", () => {
  toolName.innerHTML = "sass";
  toolDesc.innerHTML =
    "A CSS preprocessor that extends CSS with more traditional programming mechanisms.";
  skillLevel.innerHTML = "4.5 / 5";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/sass.png");
  toolLogo.setAttribute("alt", "sass");
});

// JQUERY
jquery.addEventListener("click", () => {
  toolName.innerHTML = "jquery";
  toolDesc.innerHTML =
    "JavaScript Library designed to simplify DOM manipulation.";
  skillLevel.innerHTML = "4.5 / 5";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/jquery.png");
  toolLogo.setAttribute("alt", "jquery");
});

// GIT
git.addEventListener("click", () => {
  toolName.innerHTML = "git";
  toolDesc.innerHTML =
    "A distributed version-control system for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development.";
  skillLevel.innerHTML = "4 / 5";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/git.png");
  toolLogo.setAttribute("alt", "git");
});

// JEST
jest.addEventListener("click", () => {
  toolName.innerHTML = "jest";
  toolDesc.innerHTML =
    " A JavaScript testing framework that focuses on simplicity and support for large web applications.";
  skillLevel.innerHTML = "4 / 5";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/jest.png");
  toolLogo.setAttribute("alt", "jest");
});

// SCRUM
scrum.addEventListener("click", () => {
  toolName.innerHTML = "scrum";
  toolDesc.innerHTML =
    "An agile framework for developing, delivering, and sustaining complex products, with an initial emphasis on software development.";
  skillLevel.innerHTML = "4.5 / 5";
  toolLogo.setAttribute("src", "./assets/images/tool-logo-bg-white/scrum.png");
  toolLogo.setAttribute("alt", "scrum");
});
