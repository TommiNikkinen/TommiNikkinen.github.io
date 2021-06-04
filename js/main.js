const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const projects = document.querySelector("#projects");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const projectsContent = document.querySelector("#projects-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "380px",
    height: "400px",
    x: "center",
    y: "center",
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
    width: "380px",
    height: "200px",
    x: "center",
    y: "center",
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
    width: "380px",
    height: "400px",
    x: "center",
    y: "center",
    mount: projectsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
