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




































  pName(){
    //update main pet name with rendered pet
    document.querySelector("#pet-name").innerText = this.name
  }

  pStats(){
    //update pet stats with info about rendered pet
    document.querySelector("#pet-stats").innerText = `Age: ${this.age} | Status: ${this.active_status} | Happiness Level: ${this.happiness}`
  }

  pImg(){
    //update main pet image
    document.querySelector("#pet-pic").src = this.image
  }

  pBio(info){
    //create div to display bio
    const bio = document.querySelector("#pet-bio")
    
    if (info === undefined) {
    //update div innerText with Cat Ipsum gibberish
    bio.innerText = "Peer out window, chatter at birds, lure them to mouth sniff sniff the door is opening! how exciting oh, it's you, meh. Sleep on dog bed, force dog to sleep on floor cats go for world domination and human is washing you why halp oh the horror flee scratch hiss bite for i will ruin the couch with my claws crusty butthole so human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! mesmerizing birds..."
    } else{
      bio.innerText = info
    }
  }

  pHappiness(newScore) {
    //update div displaying pet happiness with new score of instantiated pet happiness if new score is undefined
    const div = document.querySelector("#happiness")
    
    if (newScore === undefined) {
      div.innerText = this.happiness
    } else {
      div.innerText = newScore
    }

  }

  controlPanel() {
    //update control panel
    const ctrlPanel = document.querySelector("#control-panel")
  
    //create action buttons for each characterstic
  this.characteristics.forEach(characteristic => {
      const a = document.createElement("a")
        a.classList = "button is-link"
        a.innerText = characteristic.action
    //append buttons to control panel div
        ctrlPanel.append(a)
    })
  }

  showSkeletonBody(){
    //skeleton of show page to display the proper divs
    document.querySelector("#main-container").innerHTML =
      `
   <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent">
              <article id="pic-div" class="tile is-child notification is-info">
                <p class="title" id="pet-name">Pet Name Here</p>
                <figure class="image is-4by3">
                  <img id="pet-pic" src="https://i.gifer.com/embedded/download/7j7Z.gif">
                </figure>
              </article>
            </div>
              </div>
              <div class="tile is-parent">
                <article id="control-div" class="tile is-child notification is-danger">
                  <p class="title">Control Panel</p>
                  <div class="content" id="control-panel">
                    <!-- Content -->

                  </div>
                </article>
              </div>
            </div>

            <div class="tile is-parent is-vertical">
              <div class="tile is-child box is-success" id="stats">
                  <p class="title">Pet Stats</p>
                  <div id="pet-stats">Age: 2 | Breed: Dog | Something Else</div>

                  <p class="subtitle">Bio:</p>
                  <p id="pet-bio">
                    <!-- Content -->
                    Side-eyes your "jerk" other hand while being petted dream about hunting birds or meowing non stop for food or the cat was chasing the mouse. Cat cat moo moo lick ears lick paws. Flee in terror at cucumber discovered on floor. Ooh, are those your $250 dollar sandals? lemme use that as my litter box roll over and sun my belly hiss at vacuum cleaner cats woo.
                  </p>
              </div>
                  <div class="tile is-child box">
                  <p class="title">Happiness</p>
                  <p class="subtitle" id="level">Level: </p>

                    <!-- Content -->
                    <article class="tile is-child notification box">
                      <div id="happiness" class="is-4by3">
                        50
                      </div>
                    </article>

              </div>
            </div>
          </div>`

    //update body's innerHTML with renered pet info
    this.updateDOM()
  }

  updateDOM(){
    this.pName()
    
    this.pImg()

    this.pStats()
    
    this.pBio()

    this.controlPanel()
    
    this.pHappiness()
  }

}

//contains all instantiated pets
Pet.all = []
