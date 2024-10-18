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

  // Update the image in the HTML and apply the image-wrapper class for the overlay
  pokemonImageContainer.innerHTML = `
      <div class="image-wrapper">
        <img src="${pokemonImageUrl}" alt="${pokemonName}" class="pokemon-image" />
      </div>`;
}

// Main function to initialize the process
async function goLive() {
  const randomPokemonNumber = getRandomPokemonNumber();
  const pokemonData = await fetchPokemonData(randomPokemonNumber);

  if (pokemonData) {
    displayPokemon(pokemonData);
  }
}

// Run the goLive function when the page loads
window.addEventListener("DOMContentLoaded", goLive);
