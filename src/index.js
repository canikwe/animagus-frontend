document.addEventListener("DOMContentLoaded", init)

function init() {
   PetController.renderPetForm()
   PetController.attachEventListeners()
   PetController.manyPets()
   //renderAllPetButtons()
}

//sweet function to render all pets to show-pet-buttons div
// Maybe move to PetController ?
function renderAllPetButtons() {
  Pet.all.sort(function (a,b) {return a.id - b.id}).forEach(pet => {
    const petBtn = document.createElement('button')
    petBtn.innerText = pet.name
    petBtn.classList.add("button")
    petBtn.classList.add("is-warning")
    petBtn.classList.add("pet")
    petBtn.addEventListener('click', () => pet.showSkeletonBody())
    const div = document.querySelector('#show-pet-buttons')
    div.appendChild(petBtn)
  })
}