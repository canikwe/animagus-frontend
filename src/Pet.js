class Pet {
  constructor(petObj){
    //attributes
    this.id = petObj.id
    this.name = petObj.name
    this.age = petObj.age
    this.happiness = petObj.happiness
    this.image = petObj.image
    this.kill_clock = petObj.kill_clock
    this.active_status = petObj.active_status
    this.pet_characteristics = petObj.pet_characteristics
    this.level = petObj.level

    Pet.all.push(this)
  }

  ///////////// Methods /////////////
  createChars(){
  // dynamically create characteristic check_time for new pets
    this.pet_characteristics.forEach(char => {
      
      if (char.check_time === null){
        const randomizer = Math.floor(Math.random() * 10) * char.interval
        char.check_time = new Date(Date.now() + randomizer)
        console.log(`${this.name}'s ${char.name} time:`, char.check_time)
      } else {
        char.check_time = new Date(char.check_time)
      }
    })
  }

  startGamePlay() {
    this.pet_characteristics.forEach(char => {
      char.action_status = true
    })
  }

  increaseHappiness(incr) {
    return this.happiness += incr
  }

  decreaseHappiness(decr) {
    return this.happiness -= decr
  }

}

//contains all instantiated pets
Pet.all = []


