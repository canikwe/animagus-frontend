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













  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


  pName(){
    //create h4 element to display pet name
    const h4 = document.createElement('h4')

    //update innerText with pet name and return
    h4.innerText = this.name
    return h4
  }
  
  pStats(){
    //create p element to display pet stats
    const p = document.createElement('p')
    
    //update innerText with pet stats and return
    p.innerText = `${this.age} | ${this.active_status} | ${this.happiness}`
    return p
  }
  
  pImg(){
    //create img element to display pet picture
    const img = document.createElement('img')
    
    //update image source and return
    img.src = this.image
    return img
  }
  
  pBio(){
    //create div to display bio
    const div = document.createElement('div')
    
    //update div innerText with Cat Ipsum gibberish
    div.innerText = "Peer out window, chatter at birds, lure them to mouth sniff sniff the door is opening! how exciting oh, it's you, meh. Sleep on dog bed, force dog to sleep on floor cats go for world domination and human is washing you why halp oh the horror flee scratch hiss bite for i will ruin the couch with my claws crusty butthole so human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! mesmerizing birds..."
    
    //return div to render later
    return div
  }
  
  petScore() {
    //create div element to contain happiness info
    const div = document.createElement('div')
    
    //update innerText and add class for .css changes
    div.innerText = this.happiness
    div.id = "score"
    
    return div
  }

  petDiv() {
    //create individual pet div
    const petDiv = document.querySelector('#pet-container')
    const div = document.createElement('div')

    //append pet name and stats to div and append div to the DOM
    div.append(this.pName(), this.pStats(), this.pBio(), this.petScore())
    petDiv.append(div)
    
  }
  
  controlPanel() {
    //create buttons
    const ctrlPanel = document.querySelector('#control-panel')
    const feedBtn = document.createElement('button')
    const thirstBtn = document.createElement('button')
    const sleepBtn = document.createElement('button')
    
    feedBtn.className = 'btn btn-secondary'
    feedBtn.innerText = "Feed"
    thirstBtn.className = 'btn btn-secondary'
    thirstBtn.innerText = "Give Water"
    sleepBtn.className = 'btn btn-secondary'
    sleepBtn.innerText = "Sleep"
    
    
    ctrlPanel.append(feedBtn, thirstBtn, sleepBtn)
    
  }
  
  render() {
    //append pet image to the DOM and populate the pet container with the pet
    document.querySelector('#pet-picture').append(this.pImg())
    this.petDiv()
    this.controlPanel()
  }
  
  showSkeletonBody(){
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
                  <p>
                    <!-- Content -->
                    Side-eyes your "jerk" other hand while being petted dream about hunting birds or meowing non stop for food or the cat was chasing the mouse. Cat cat moo moo lick ears lick paws. Flee in terror at cucumber discovered on floor. Ooh, are those your $250 dollar sandals? lemme use that as my litter box roll over and sun my belly hiss at vacuum cleaner cats woo.
                  </p>
              </div>
                  <div class="tile is-child box" id="happiness">
                  <p class="title">Happiness</p>
                  <p class="subtitle" id="level">Level: </p>
  
                    <!-- Content -->
                    <article class="tile is-child notification box">
                      <div id="happiness-div" class="is-4by3">
                        50
                      </div>
                    </article>

              </div>
            </div>
          </div>`

    this.updateDOM()
  }
  
  updateDOM(){
    document.querySelector("#pet-pic").src = this.image
    
    //create p element to display pet stats
    const p = document.createElement('p')
    
    //update innerText with pet stats and return
    p.innerText = `${this.age} | ${this.active_status} | ${this.happiness}`
    
    document.querySelector("#pet-stats").append(p)
    
    //update control panel
    const ctrlPanel = document.querySelector("#control-panel")
//    debugger
    this.characteristics.forEach(characteristic => {
      const a = document.createElement("a")
        a.classList = "button is-primary"
        a.innerText = characteristic.action
      
        ctrlPanel.append(a)
    })

//    debugger
  }
  
}



Pet.all = []