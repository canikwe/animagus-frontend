document.addEventListener("DOMContentLoaded", init);

function init() {
  PetView.renderHomepage();
  PetView.renderPetFilters();
  PetController.attachGalleryListeners();
  PetController.attachFormListeners();
  PetController.manyPets();
}
