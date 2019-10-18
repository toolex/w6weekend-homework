document.addEventListener("DOMContentLoaded", () => {
  const newAnimalform = document.querySelector('#new-animal-form');
  newAnimalform.addEventListener('submit', handleNewAnimalFormSubmit);

})


const handleNewAnimalFormSubmit = function (event) {
  event.preventDefault();

  const newListAnimal = createNewListAnimal(event.target);
  const listAnimal = document.querySelector("#endangered-animals");
  listAnimal.appendChild(newListAnimal);

  event.target.reset();
}

const createNewListAnimal = function (form) {
  const newListAnimal = document.createElement("div");

  const name = document.createElement("h2");
  name.textContent = form.name.value;
  newListAnimal.appendChild(name);

  const species = document.createElement("h3");
  species.textContent = form.species.value;
  newListAnimal.appendChild(species);

  const continent = document.createElement("p");
  continent.textContent = form.continent.value;
  newListAnimal.appendChild(continent);

  return newListAnimal;
}
