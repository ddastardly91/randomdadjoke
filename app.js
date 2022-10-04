const button = document.querySelector("button");
const jokeText = document.querySelector("p");

button.addEventListener("click", async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const req = await axios.get("https://icanhazdadjoke.com/", config);
    jokeText.textContent = req.data.joke;
  } catch {
    jokeText.textContent =
      "Sorry, there was a problem with the jokes API, try again later.";
  }
});

(async () => {
  await tsParticles.load("tsparticles", {
    background: {
      opacity: 0,
    },
    preset: "snow",
  });
})();
