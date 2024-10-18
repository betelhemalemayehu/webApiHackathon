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
  // Find the HTML elements where the data will be displayed
  const pokemonNameElement = document.querySelector(".pokemon__name");
  const pokemonImageContainer = document.querySelector(".card");

  // Get the data for the Pokémon's name and image URL
  const pokemonName = pokemon.forms[0].name;
  const pokemonImageUrl =
    pokemon.sprites.other["official-artwork"].front_default;

  // Update the name in the HTML
  pokemonNameElement.textContent = `Name: ${pokemonName}`;
  pokemonNameElement.style.display = "none"; // Initially hide the name

  // Update the image in the HTML and apply the image-wrapper class for the overlay
  pokemonImageContainer.innerHTML = `
        <div class="image-wrapper">
          <img src="${pokemonImageUrl}" alt="${pokemonName}" class="pokemon-image" style="filter: brightness(0)" />
        </div>`;
}

// Function to reveal the Pokémon and remove the overlay
function reveal() {
  // Find the Pokémon image and name
  const pokemonImage = document.querySelector(".pokemon-image");
  const pokemonName = document.querySelector(".pokemon__name");

  // Remove the overlay by resetting the filter
  if (pokemonImage) {
    pokemonImage.style.filter = "none"; // Remove the overlay (CSS filter)
  }
  if (pokemonName) {
    pokemonName.style.display = "flex"; // Show the name of the Pokémon
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

// Main function to initialize the process on page load
async function goLive() {
  await loadNewPokemon(); // Load an initial random Pokémon
}

// Run the goLive function when the page loads
window.addEventListener("DOMContentLoaded", goLive);

// Add an event listener for the "Show Me!" button to reveal the hidden Pokémon
const revealButton = document.querySelector(".button");
if (revealButton) {
  revealButton.addEventListener("click", reveal); // Remove overlay when button is clicked
}

// Add an event listener for the "Next" button to load a new random Pokémon
const nextButton = document.querySelector(".button2");
if (nextButton) {
  nextButton.addEventListener("click", loadNewPokemon); // Load new Pokémon when the button is clicked
}
