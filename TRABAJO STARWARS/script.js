document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        { start: 1, end: 5, title: " 🚀 En esta sección encontrarás información de los personajes más populares de las películas" },
        { start: 6, end: 10, title: "🚀 En esta sección encontrarás información de los personajes secundarios más importantes" },
        { start: 11, end: 15, title: "🚀 En esta sección encontrarás información de otros personajes significativos" }
      ];
      
    const characterList = document.getElementById("character-list");
  
    sections.forEach(section => {
      const sectionElement = document.createElement("div");
      sectionElement.classList.add("card");
  
      const sectionHeader = document.createElement("div");
      sectionHeader.classList.add("card-header");
      
  
      const sectionTitle = document.createElement("h5");
      sectionTitle.classList.add("mb-0");
      sectionTitle.innerHTML = `<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#section-${section.start}-${section.end}">${section.title}</button>`;
  
      sectionHeader.appendChild(sectionTitle);
      sectionElement.appendChild(sectionHeader);
  
      const characterContainer = document.createElement("div");
      characterContainer.id = `section-${section.start}-${section.end}`;
      characterContainer.classList.add("collapse");
      characterContainer.setAttribute("data-parent", "#character-list");
  
      const characterContent = document.createElement("div");
      characterContent.classList.add("card-body");
  
      sectionElement.appendChild(characterContainer);
      characterContainer.appendChild(characterContent);
      characterList.appendChild(sectionElement);

      sectionHeader.addEventListener("mouseenter", function() {
        characterContainer.classList.add("show");
      });

      sectionHeader.addEventListener("mouseleave", function() {
        characterContainer.classList.remove("show");
      });
  
      for (let i = section.start; i <= section.end; i++) {
        fetch(`https://swapi.dev/api/people/${i}`)
          .then(response => response.json())
          .then(character => {
            const characterBox = document.createElement("div");
            characterBox.classList.add("character-box");
  
            const characterName = document.createElement("h4");
            characterName.textContent = character.name;
  
            const characterHeight = document.createElement("p");
            characterHeight.textContent = `Height: ${character.height} cm`;
  
            const characterWeight = document.createElement("p");
            characterWeight.textContent = `Weight: ${character.mass} kg`;
  
            characterBox.appendChild(characterName);
            characterBox.appendChild(characterHeight);
            characterBox.appendChild(characterWeight);
            characterContent.appendChild(characterBox);
          })
          .catch(error => console.log(error));
      }
    });
  });
  