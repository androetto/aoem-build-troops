import React, { useState } from "react";
import { heroesList } from "./heroesData";
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
    const heroCategory = e.dataTransfer.getData("category");
    const hero = heroes[heroCategory].find((h) => h.id === parseInt(heroId));

    if (hero && !troops[troopIndex][slotIndex]) {
      // Actualizar tropas
      const updatedTroops = troops.map((row, i) =>
        row.map((slot, j) =>
          i === troopIndex && j === slotIndex ? hero : slot
        )
      );
      setTroops(updatedTroops);

      const updatedHeroes = { ...heroes };
      updatedHeroes[heroCategory] = updatedHeroes[heroCategory].filter(
        (h) => h.id !== hero.id
      );
      setHeroes(updatedHeroes);
    }
  };

  const handleReturn = (troopIndex, slotIndex) => {
    const hero = troops[troopIndex][slotIndex];
  
    if (hero) {
      const updatedTroops = troops.map((row, i) =>
        row.map((slot, j) =>
          i === troopIndex && j === slotIndex ? null : slot
        )
      );
      setTroops(updatedTroops);
  
      const updatedHeroes = { ...heroes };
      
      if (hero.id === 1) updatedHeroes.mythics.push(hero);
      else if (hero.id >= 2 && hero.id <= 9) updatedHeroes.legendaries.push(hero); 
      else updatedHeroes.epics.push(hero); 
  
      setHeroes(updatedHeroes);
    }
  };

  const onDragStart = (e, hero, category) => {
    e.dataTransfer.setData("heroId", hero.id);
    e.dataTransfer.setData("category", category);
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
        {Object.entries(heroes).map(([category, heroList]) => (
          <div key={category} className="hero-category">
            <h3>{category.toUpperCase()}</h3>
            <div className="category-grid">
              {heroList.map((hero) => (
                <div
                  key={hero.id}
                  className="hero-card"
                  draggable
                  onDragStart={(e) => onDragStart(e, hero, category)}
                >
                  <img src={hero.image} alt={hero.name} className="hero-img" />
                  <div className="hero-name">{hero.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
