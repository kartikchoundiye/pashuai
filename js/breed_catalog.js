// Load breed data from JSON and initialize
const breeds = [
  {
    name: "Gir",
    species: "Cattle",
    description: "Known for its milk production and adaptability. Native to Gujarat, India.",
    image: "assets/breeds/gir.jpg"
  },
  {
    name: "Sahiwal",
    species: "Cattle",
    description: "A resilient breed native to Punjab, famous for high milk yield and heat tolerance.",
    image: "assets/breeds/sahiwal.jpg"
  },
  {
    name: "Jaffarabadi",
    species: "Buffalo",
    description: "A heavy milk-producing buffalo breed originating from Gujarat.",
    image: "assets/breeds/jaffarabadi.jpg"
  },
  {
    name: "Murrah",
    species: "Buffalo",
    description: "Widely recognized for its remarkable milk producing ability, native to Haryana and Punjab.",
    image: "assets/breeds/murrah.jpg"
  },
  {
    name: "Red Sindhi",
    species: "Cattle",
    description: "An indigenous breed popular in Sindh region, known for high butterfat milk.",
    image: "assets/breeds/red_sindhi.jpg"
  }
];

// DOM elements
const breedList = document.querySelector('.breed-list');
const breedSearch = document.getElementById('breedSearch');
const speciesFilter = document.getElementById('speciesFilter');
const clearFiltersBtn = document.getElementById('clearFilters');

// Function to render breed cards on page
function renderBreeds(filteredBreeds) {
  breedList.innerHTML = '';

  if (filteredBreeds.length === 0) {
    breedList.innerHTML = '<p>No breeds match your search/filter criteria.</p>';
    return;
  }

  filteredBreeds.forEach(breed => {
    const card = document.createElement('div');
    card.className = 'breed-card';

    card.innerHTML = `
      <img class="breed-img" src="${breed.image}" alt="${breed.name}" />
      <div class="breed-details">
        <div class="breed-name">${breed.name}</div>
        <div class="breed-species">${breed.species}</div>
        <div class="breed-description">${breed.description}</div>
      </div>
    `;

    breedList.appendChild(card);
  });
}

// Filter function triggered on input change
function filterBreeds() {
  const searchTerm = breedSearch.value.toLowerCase();
  const speciesTerm = speciesFilter.value;

  let filtered = breeds.filter(breed => {
    const matchesSearch = breed.name.toLowerCase().includes(searchTerm) || breed.description.toLowerCase().includes(searchTerm);
    const matchesSpecies = speciesTerm === '' || breed.species.toLowerCase() === speciesTerm.toLowerCase();
    return matchesSearch && matchesSpecies;
  });

  renderBreeds(filtered);
}

// Clear search and filters
function clearFilters() {
  breedSearch.value = '';
  speciesFilter.value = '';
  renderBreeds(breeds);
}

// Event listeners
breedSearch.addEventListener('input', filterBreeds);
speciesFilter.addEventListener('change', filterBreeds);
clearFiltersBtn.addEventListener('click', clearFilters);

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  renderBreeds(breeds);
});
