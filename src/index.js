document.addEventListener("DOMContentLoaded", init)

function init() {
   PetView.renderHomepage()
   PetController.attachGalleryListeners()
   PetController.attachFormListeners()
   PetController.manyPets()

}
