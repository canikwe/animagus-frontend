class PetController{
  static currentPet(){
    Adapter.getPet(1)
    .then(petObj => {
    const newPet = new Pet(petObj)
//    newPet.bulmerBody()
    })
    
  }
  
  
}