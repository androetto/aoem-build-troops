// Importar React
import React from 'react';

// Importar las imágenes desde la carpeta assets
import hero1 from './assets/Josephine.webp';
import hero2 from './assets/Joan_of_Arc.webp';
import hero3 from './assets/Hammurabi.webp';

const HeroesGrid = () => {
    const heroes = [
      { id: 1, name: 'Hero 1', image: hero1 },
      { id: 2, name: 'Hero 2', image: hero2 },
      { id: 3, name: 'Hero 3', image: hero3 },
    ];
  
    // Manejo de "dragstart" para arrastrar héroes
    const handleDragStart = (e, hero) => {
      e.dataTransfer.setData('hero', JSON.stringify(hero)); // Guardar el héroe en el evento
    };
  
    return (
      <div>
        <h2>Selecciona tus héroes</h2>
        <div className="heroes-grid">
          {heroes.map((hero) => (
            <img
              key={hero.id}
              src={hero.image}
              alt={hero.name}
              draggable
              onDragStart={(e) => handleDragStart(e, hero)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default HeroesGrid;