class PetController{
  
  // Grab all pets from the database so players can access previously created pets
  static manyPets(){
    Adapter.getAllPets()
    .then(pets => {
      pets.forEach(p => {
        //instantiate each pet returned from the database
        const pet = new Pet(p)
        PetView.renderPetBtn(pet)
        .addEventListener('click', () => {
          PetView.hideFilters()
          PetController.gameEventListeners(pet)
        })
      })
      PetController.filterEventListeners()
    })
  }

  // update DOM and add event listeners for played pet
  static gameEventListeners(pet) {
    PetView.renderGamePlay()
    PetView.updateDOM(pet)
    pet.pet_characteristics.forEach(char => {
      PetView.controlPanel(char, pet)
      .addEventListener('click', (e) => {
        PetController.handleCharacteristic(char, pet)
        PetView.disableBtn(e.target)
        PetView.updateHappiness(pet.happiness)
      })
    })

    // clear buttons from the show-pet-buttons div while game is in play
    PetView.clearPetBtns()
    
    PetController.startGamePlay(pet)
    
  }

  // add event listeners to the filter buttons
  static filterEventListeners() {
    document.querySelector('#active').addEventListener('change', () => {
      document.querySelectorAll('.true').forEach(btn => btn.style = '')
      document.querySelectorAll('.false').forEach(btn => btn.style='display: none')
    })

    document.querySelector('#inactive').addEventListener('change', () => {
      document.querySelectorAll('.false').forEach(btn => btn.style = '')
      document.querySelectorAll('.true').forEach(btn => btn.style='display:none')
    })

    document.querySelector('#all').addEventListener('change', () => {
      document.querySelectorAll('.pet').forEach(btn => btn.style= '')
    })

  }

  static handleCharacteristic(characteristic, pet) {
    // client-side methods to advance game play session
    pet.careForPet(characteristic)
    pet.increaseHappiness(characteristic.incr)

    // server-side methods for db persistence
    const petData = { happiness: pet.happiness }
    Adapter.updatePetDB(pet.id, petData) // PATCH to pet route

    const petCharData = { action_status: true, check_time: characteristic.check_time }
    Adapter.updatePetCharDB(characteristic.id, petCharData) // PATCH to pet_characteristics route
  }

  static startGamePlay(currentPet){
    let hapInterval
    if(currentPet.active_status) {
      // update check_time for each pet characteristic
      currentPet.createChars()

      //start game clock to periodically check pet characteristics and their action_status
      hapInterval = setInterval(() => {

        if (currentPet.happiness <= 0) {
          PetView.endGame(currentPet)
          currentPet.active_status = false //possibly move to Pet.js as a method
  
          //stop the game clock
          clearInterval(hapInterval)
          console.log("you have died")
  
          //send to backend for db persistence
          Adapter.updatePetDB(currentPet.id, {active_status: currentPet.active_status, happiness: 0})
  
        } else if (currentPet.happiness >= 100) {
          PetView.endGame(currentPet)
          currentPet.active_status = false //possibly move to Pet.js as a method
  
          //stop the game clock
          clearInterval(hapInterval)
          console.log("you have won")

          //send to backend for db persistence
          Adapter.updatePetDB(currentPet.id, {active_status: currentPet.active_status, happiness: 100, level: 2})
  
        } else {
          PetController.checkCharacteristic(currentPet)
        }
      }, 10)
    } else {
      PetView.endGame(currentPet)
    }
    
    //attach back button to show-pet-buttons div
    PetController.attachBackBtnListener(hapInterval)

  }

  // update front and backend if characteristic's check_time has been reached
   static checkCharacteristic(pet){
     pet.pet_characteristics.forEach(c => {
       if (new Date() >= c.check_time) {

        // decrease happiness if the characteristic's action_status is still false
         if (c.action_status === false){
           console.log(`Oh no, you went down ${c.decr} points!`)
            pet.decreaseHappiness(c.decr)
            PetView.updateHappiness(pet.happiness)
         }

        //reset characteristic: client-side
        pet.resetCharacteristic(c)
        const btn = document.getElementById(`${c.name}`)
        PetView.activateBtn(btn)
        PetView.pNotifications(c, pet)
        console.log(`New ${c.name} check_time`, c.check_time)
   
         //reset characteristic: server-side
         const petData = {active_status: pet.active_status, happiness: pet.happiness}
         Adapter.updatePetDB(pet.id, petData) //patch to pets route
   
         const petCharData = {check_time: c.check_time, action_status: false}
         Adapter.updatePetCharDB(c.id, petCharData) //patch to pet_characteristics route
       }
     })
  }

  // create event listener for back button to render the homepage onClick
  static attachBackBtnListener(hapInterval) {
    
    PetView.renderBackBtn().addEventListener('click', () => {
      clearInterval(hapInterval) //stop game clock interval on click

      // render homepage and attach all event listeners
      PetView.renderHomepage()
      PetView.displayFilters()
      PetController.attachGalleryListeners()
      PetController.attachFormListeners()
      
      // Create all pet buttons from instantiated pets and attach event listeners
      Pet.all.forEach(p => {
        PetView.renderPetBtn(p)
        .addEventListener('click', () => {
        PetController.gameEventListeners(p)
        })
      })
    })
  }

  // create event listeners for each picture in the pet-gallery
  static attachGalleryListeners() {
    let i
    for (i = 1; i <= 20; i++) {
    document.querySelector(`#pet-button-${i}`).addEventListener('click', PetController.handleClickOfPetImage)
    }
  }

  // create event listener for the pet-form
  static attachFormListeners() {
    document.querySelector('#pet-form').addEventListener('submit', PetController.handleFormSubmit)
  }

  // send new pet information to the db to create on the backend and instantiate on the frontend
  static handleFormSubmit(event) {
    event.preventDefault()
    
    const body = {
      name: document.querySelector('#name').value,
      age: document.querySelector('#age').value,
      image: document.querySelector('#image-input').value,
    }
    
    Adapter.createPet(body).then(newPet => {
      console.log(newPet)
      const pet = new Pet(newPet)
      PetView.hideFilters()
      PetController.gameEventListeners(pet) //start game with new pet
    })
  }

  // show pet image in the main pet div when button is clicked in the pet-gallery
  static handleClickOfPetImage(event) {
    const id = parseInt(event.currentTarget.dataset.id)
    document.querySelector("#image-input").value = document.querySelector(`#pet-image-${id}`).src
    document.querySelector("#main-pet").src = document.querySelector(`#pet-image-${id}`).src
  }
}


