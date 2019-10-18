document.addEventListener("DOMContentLoaded", () => {
  const newAnimalform = document.querySelector('#new-animal-form');
  newAnimalform.addEventListener('submit', handleNewAnimalFormSubmit);

})


const handleNewAnimalFormSubmit = function (event) {
  event.preventDefult();

  const newListAnimal = createNewListAnimal(event.target);
  const listAnimal = document.querySelector("#endangered-animals");
  listAnimal.appendChild(newListAnimal);

  event.target.reset();
}
