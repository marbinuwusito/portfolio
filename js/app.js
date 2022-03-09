const foo = document.getElementById("foo");
const navbarItems = document.querySelectorAll(".navbar-item");

const config = {
  loop: true,
  delay: 100,
};

const typewriter = new Typewriter(foo, config);

typewriter
  .pauseFor(1000)
  .typeString("Hi, my name is Marvin Orellana")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(1000)
  .typeString("I am a junior Web Developer based in El Salvador.")
  .deleteAll()
  .pauseFor(1000)
  .start();

navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    item.className += " active";
  });
});
