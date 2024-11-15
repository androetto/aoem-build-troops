import React, { useState } from "react";
import heroesList from "./heroesData"; // Importamos sin destructurar ya que ahora es un array plano
import "./App.css";

const App = () => {
  const [troops, setTroops] = useState(
    Array(5)
      .fill(null)
      .map(() => [null, null, null])
  );
  const [heroes, setHeroes] = useState(heroesList);

  const handleDrop = (e, troopIndex, slotIndex) => {
    e.preventDefault();
    const heroId = e.dataTransfer.getData("heroId");
    const hero = heroes.find((h) => h.id === parseInt(heroId));

    if (hero && !troops[troopIndex][slotIndex]) {
      // Actualizar tropas
      const updatedTroops = troops.map((row, i) =>
        row.map((slot, j) =>
          i === troopIndex && j === slotIndex ? hero : slot
        )
      );
      setTroops(updatedTroops);

      // Remover héroe de la lista
      const updatedHeroes = heroes.filter((h) => h.id !== hero.id);
      setHeroes(updatedHeroes);
    }
  };

  const handleReturn = (troopIndex, slotIndex) => {
    const hero = troops[troopIndex][slotIndex];

    if (hero) {
      // Eliminar héroe de la tropa
      const updatedTroops = troops.map((row, i) =>
        row.map((slot, j) =>
          i === troopIndex && j === slotIndex ? null : slot
        )
      );
      setTroops(updatedTroops);

      // Devolver héroe a la lista
      setHeroes([...heroes, hero]);
    }
  };

  const onDragStart = (e, hero) => {
    e.dataTransfer.setData("heroId", hero.id);
  };

  return (
    <div className="App">
      <div className="left-grid">
        {troops.map((row, troopIndex) => (
          <div key={troopIndex} className="troop-row">
            <div className="row-number">{troopIndex + 1}</div>{" "}
            {/* Indicador numérico */}
            {row.map((slot, slotIndex) => (
              <div
                key={slotIndex}
                className="troop-slot"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, troopIndex, slotIndex)}
                onClick={() => handleReturn(troopIndex, slotIndex)}
              >
                {slot && (
                  <>
                    <img
                      src={slot.image}
                      alt={slot.name}
                      className="hero-img"
                    />
                    <div className="hero-name">{slot.name}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="right-grid">
        <div className="hero-list">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="hero-card"
              draggable
              onDragStart={(e) => onDragStart(e, hero)}
            >
              <img src={hero.image} alt={hero.name} className="hero-img" />
              <div className="hero-name">{hero.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
