import "./PokemonCard.css";

const typeColors = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  poison: "#A040A0",
  electric: "#F8D030",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  flying: "#A890F0",
};

export default function PokemonCard({ poke, openDetails, toggleFavorite, isFavorite }) {
  return (
    <div className="pokemon-card" onClick={() => openDetails(poke)}>
      
      <img src={poke.sprites.front_default} alt={poke.name} />
      <h3>{poke.name}</h3>

      {/* ⭐ Favorite Button */}
      <button
        className={`fav-btn ${isFavorite ? "active-fav" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(poke);
        }}
      >
        {isFavorite ? "★ Favorited" : "☆ Add Favorite"}
      </button>

    </div>
  );
}
