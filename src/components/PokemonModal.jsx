import "./PokemonModal.css";

function PokemonModal({ pokemon, close }) {
  const type = pokemon.types[0].type.name;
 
  

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        <div className={`modal-header type-${type}`}>
          <h2>{pokemon.name}</h2>
          <span>#{pokemon.id}</span>
          <button className="close-btn" onClick={close}>✕</button>
        </div>

        <div className="modal-img-box">
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
        </div>

        <h3>Abilities</h3>
        {pokemon.abilities.map((ab) => (
          <p key={ab.ability.name}>{ab.ability.name}</p>
        ))}

        <h3>Base Stats</h3>
        <div>
          {pokemon.stats.map((stat) => (
            <div className="stat-row" key={stat.stat.name}>
              <span className="stat-name">{stat.stat.name}</span>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                ></div>
              </div>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PokemonModal;
