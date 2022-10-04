const button = document.querySelector("button");
const jokeText = document.querySelector("p");

button.addEventListener("click", async () => {
  const config = { headers: { Accept: "application/json" } };
  const req = await axios.get("https://icanhazdadjoke.com/", config);
  jokeText.textContent = req.data.joke;
});

(async () => {
  await tsParticles.load("tsparticles", {
    background: {
      opacity: 0,
    },
    preset: "snow",
  });
})();
