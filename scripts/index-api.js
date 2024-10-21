// Function to get a random Pokémon number between 1 and 1025
function getRandomPokemonNumber() {
  return Math.floor(Math.random() * 1025) + 1;
}

// Function to fetch Pokémon data from the API
async function fetchPokemonData(pokemonNumber) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}

// Function to display the Pokémon's name and image in the HTML
function displayPokemon(pokemon) {
  const pokemonNameElement = document.querySelector(".pokemon__name");
  const pokemonImageContainer = document.querySelector(".image-wrapper");

  const pokemonName = pokemon.forms[0].name;
  const pokemonImageUrl =
    pokemon.sprites.other["official-artwork"].front_default;

  // Update the name in the HTML
  pokemonNameElement.textContent = `${pokemonName}`;
  pokemonNameElement.style.display = "none"; // Initially hide the name

  // Update the image in the HTML
  pokemonImageContainer.innerHTML = `
    <img src="${pokemonImageUrl}" alt="${pokemonName}" class="pokemon-image" style="filter: brightness(0)" />
  `;
}

// Function to reveal the Pokémon and remove the overlay
function reveal() {
  const pokemonImage = document.querySelector(".pokemon-image");
  const pokemonName = document.querySelector(".pokemon__name");

  if (pokemonImage) {
    pokemonImage.style.filter = "none"; // Remove the overlay (CSS filter)
  }
  if (pokemonName) {
    pokemonName.style.display = "block"; // Show the name of the Pokémon
  }
}

// Function to load a new random Pokémon
async function loadNewPokemon() {
  const randomPokemonNumber = getRandomPokemonNumber();
  const pokemonData = await fetchPokemonData(randomPokemonNumber);

  if (pokemonData) {
    displayPokemon(pokemonData);
  }
}

// Initialize the page by loading a Pokémon when the DOM content is fully loaded
window.addEventListener("DOMContentLoaded", async () => {
  await loadNewPokemon(); // Load an initial Pokémon

  const revealButton = document.querySelector(".button");
  const nextButton = document.querySelector(".button2");

  // Add event listeners for buttons
  if (revealButton) {
    revealButton.addEventListener("click", reveal);
  }

  if (nextButton) {
    nextButton.addEventListener("click", loadNewPokemon);
  }
});
