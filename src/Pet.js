class Pet {
  constructor(petObj){
    this.id = petObj.id
    this.name = petObj.name
    this.age = petObj.age
    this.happiness = petObj.happiness
    this.image = petObj.image
    this.active_status = petObj.active_status
    this.characteristics = petObj.characteristics
    Pet.all.push(this)
  }

  happinessUp(characteristicName) {
    const char = this.characteristics.find(char => {
      return char.name === characteristicName
    })
    this.happiness += char.incr
    if (this.happiness > 100) {
      this.happiness = 100
    }
    console.log(this.happiness)
  }

  happinessDown(characteristicName) {
    const char = this.characteristics.find(char => {
      return char.name === characteristicName
    })
    this.happiness -= char.decr
    if (this.happiness < 0) {
      this.happiness = 0
    }
    console.log(this.happiness)
  }

}

Pet.all = []
