const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const projects = document.querySelector("#projects");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const projectsContent = document.querySelector("#projects-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "400px",
    height: "400px",
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    background: "#00aa00",
    width: "400px",
    height: "200px",
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

projects.addEventListener("click", () => {
  const projectsBox = new WinBox({
    title: "My Projects",
    background: "#00aa00",
    width: "500px",
    height: "500px",
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
