import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const types = [
    "all", "grass", "fire", "water", "electric", "bug", "normal", "poison", "ground"
  ];
  

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);


  const limit = 20;

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const offset = (page - 1) * limit;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();

      const detailed = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          return res.json();
        })
      );

      setPokemonList(detailed);
    } catch (error) {
      console.error("Error loading Pokémon", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const openDetails = (poke) => {
    setSelectedPokemon(poke);
    setShowModal(true);
  };

  const closeDetails = () => {
    setSelectedPokemon(null);
    setShowModal(false);
  };
  
  const toggleFavorite = (poke) => {
    let updated;
  
    if (favorites.some((fav) => fav.id === poke.id)) {
      updated = favorites.filter((fav) => fav.id !== poke.id);
    } else {
      updated = [...favorites, poke];
    }
  
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };
  

  const typeNames = {
    normal: "Normal",
    fire: "Fire",
    water: "Water",
    bug: "Bug",
    grass: "Grass",
    poison: "Poison",
    electric: "Electric",
    ground: "Ground",
  };
  
  const dynamicTitle = selectedPokemon
    ? typeNames[selectedPokemon.types[0].type.name] + " Lite"
    : "Pokedex Lite";

    
  const [selectedType, setSelectedType] = useState("all");


  return (
    <div className="app">
      <h1>{dynamicTitle}</h1>

      <input
        className="search"
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      <div className="type-filter">
        {types.map((t) => (
          <button
            key={t}
            className={`filter-chip ${selectedType === t ? "active-chip" : ""}`}
            onClick={() => setSelectedType(t)}
          >
            {t}
          </button>
        ))}
      </div>


      <div className="pokemon-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemonList
            .filter((p) => p.name.includes(search))
            .filter((p) =>
              selectedType === "all"
                ? true
                : p.types.some((t) => t.type.name === selectedType)
            )

            .map((poke) => (
              <PokemonCard
                key={poke.id}
                poke={poke}
                openDetails={openDetails}
                toggleFavorite={toggleFavorite}
                isFavorite={favorites.some((f) => f.id === poke.id)}
              />
            ))
        )}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>

      {showModal && selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} close={closeDetails} />
      )}
    </div>
  );
}

export default App;
