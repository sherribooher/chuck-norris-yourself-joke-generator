const jokeForm = document.getElementById('jokeForm');
const jokeText = document.getElementById('jokeText');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

jokeForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const firstName = firstNameInput.value || "Chuck";
  const lastName = lastNameInput.value || "Norris";

  const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    jokeText.innerHTML = data.value.joke;
  }
  catch (ex) {
    console.error(ex);
  }
});

