const fetchData = async () => {
  const pokemonName = document
    .getElementById("pokemonName")
    .value.toLowerCase();
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    const pokemonImg = document.getElementById("pokemonImg");
    const pokemonImage = data.sprites.front_default;
    pokemonImg.src = pokemonImage;
    pokemonImg.style.display = "block";
  } catch (error) {
    console.error(error, "Error Message");
  }
};