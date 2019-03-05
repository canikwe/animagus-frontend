document.addEventListener("DOMContentLoaded", init)

function init() {
  PetController.renderPetForm()
  PetController.attachEventListeners()
}



  function testFunction() {

    Pet.all.forEach(pet => {
      pet.characteristics.forEach(characteristic => {
        // pet.happinessDown(characteristic.name)
        // console.log(characteristic.name)
      })
      console.log(pet.characteristics)
    })
    // console.log(Pet.all)
  }

  function gen1() {
    PetController.currentPet()

  }
  function gen2() {
    Pet.all[0].showSkeletonBody()
  }

  // const testInterval = setInterval(testFunction, 5000)

  function startCounter() {
    Pet.all.forEach(pet => {
      pet.characteristics.forEach(characteristic => {
        pet[`${characteristic.name}interval`] = setInterval(() => pet.happinessDown(characteristic.name), 5000)
        // pet[`${characteristic.name}interval`]()
        console.log(`startCounter(): pet: ${pet.name} characteristic: ${characteristic.name} happiness:${pet.happiness}`)
      })
    })
  }

  function testClear() {
    clearInterval(testInterval);
  }


  function startCounterOn(characteristicName, petObj) {

    const charObj = petObj.characteristics.find(characteristic => {
      return characteristic.name === characteristicName
    })

    petObj[`${charObj.name}interval`] = setInterval(() => petObj.happinessDown(charObj.name), 5000)
    // console.log(`startCounter(): pet: ${petObj.name} characteristic: ${charObj.name} happiness:${petObj.happiness}`)

  }
