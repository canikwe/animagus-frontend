class Pet {
  constructor(petObj){
    this.id = petObj.id
    this.name = petObj.name
    this.age = petObj.age
    this.happiness = petObj.happiness
    this.image = petObj.image
    this.active_status = petObj.active_status
    Pet.all.push(this)
  }
}

Pet.all = []
