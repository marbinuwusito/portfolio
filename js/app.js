const foo = document.getElementById('foo');

const config = {
  loop: true,
  delay: 100,
}

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
