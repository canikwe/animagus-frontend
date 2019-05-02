class Pet {
  constructor(petObj){
    //attributes
    this.id = petObj.id
    this.name = petObj.name
    this.age = petObj.age
    this.happiness = petObj.happiness
    this.image = petObj.image
    // this.bio = petObj.bio
    this.kill_clock = petObj.kill_clock
    this.active_status = petObj.active_status
    this.pet_characteristics = petObj.pet_characteristics

    //methods
    this.createChars(petObj)
    Pet.all.push(this)
  }

  ///////////// Methods /////////////
  createChars(petObj){
  //method to dynamically create characteristic times and statuses
    petObj.pet_characteristics.forEach(char => {
      // this[characteristic.action_status] = false
      char.check_time = new Date(Date.now() + char.interval)
      // char.action_status = false
    })
  }
  
  pName(){
    //update main pet name with rendered pet
    document.querySelector("#pet-name").innerText = this.name
  }

  pStats(){
    //update pet stats with info about rendered pet
    document.querySelector("#pet-stats").innerText = `Age: ${this.age}`

    // `Age: ${this.age} | Status: ${this.active_status} | Happiness Level: ${this.happiness}`

  }

  pImg(){
    //update main pet image
    document.querySelector("#pet-pic").src = this.image
  }

  // pBio(){
  //   //create div to display bio
  //   const bio = document.querySelector("#pet-bio")

  //   if (this.bio === undefined) {
  //   //update div innerText with Cat Ipsum gibberish
  //   bio.innerText = "Peer out window, chatter at birds, lure them to mouth sniff sniff the door is opening! how exciting oh, it's you, meh. Sleep on dog bed, force dog to sleep on floor cats go for world domination and human is washing you why halp oh the horror flee scratch hiss bite for i will ruin the couch with my claws crusty butthole so human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! mesmerizing birds..."
  //   } else{
  //     bio.innerText = `Bio: ${this.bio}`
  //   }
  // }

  pNotifications(c){
    if (this.active_status) {
      const stats = document.querySelector("#pet-notifications")
  
      let char_action = document.createElement("li")
      char_action.className = 'list-item'
      char_action.innerText = `It is time to ${c.action} your pet!`

      stats.append(char_action)

      char_action.addEventListener('click', () => {
        stats.removeChild(char_action)
      })
    }
  }

  pHappiness(newScore) {
    // debugger
    //update div displaying pet happiness with new score of instantiated pet happiness if new score is undefined
    const div = document.querySelector("#happiness")

    if (newScore === undefined) {
      div.innerText = this.happiness
    } else {
      div.innerText = newScore
    }

    // debugger
    const petData = {happiness: this.happiness}
    Adapter.updatePetDB(this.id, petData)

  }

  controlPanel() {
    //update control panel
    const ctrlPanel = document.querySelector("#control-panel")

    //create action buttons for each characterstic and add event listeners
    this.pet_characteristics.forEach(characteristic => {
      const a = document.createElement("button")
        a.classList = "button is-link"
        a.innerText = characteristic.action
        a.id = characteristic.name
        a.disabled = characteristic.action_status
//
        a.addEventListener("click", () => {
          a.disabled = true
          //legacy code to delete
          // this[characteristic.action_status] = true

          characteristic.action_status = true
          // debugger
          this.happiness += characteristic.incr
          this.pHappiness(this.happiness)
        })
    //append buttons to control panel div
        ctrlPanel.append(a)

    //add notifications to the stats div
    this.pNotifications(characteristic)
    })
  }

  showSkeletonBody(){
    //skeleton of show page to display the proper divs
    document.querySelector("#main-container").innerHTML =
      `
  <div class="container" id="skeleton">
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

                  <p class="subtitle"></p>
                  <div class="list is-hoverable">
                    <ul id="pet-notifications">
                      <!-- Content -->
                    </ul>
                  </div>
              </div>
                  <div class="tile is-child box" id="happi">
                  <p class="title">Happiness</p>
                  <!-- <p class="subtitle" id="level">Level: </p> -->

                    <!-- Content -->
                    <article class="tile is-child notification box">
                      <div id="happiness" class="is-4by3">
                        50
                      </div>
                    </article>
                </div>
              </div>
            </div>
          </div>`

    //update body's innerHTML with renered pet info
    this.updateDOM()
//    //enable hunger button
//    document.querySelector("#Hunger").disabled = false
    let hapInterval = setInterval(() => {
//
      if (this.happiness <= 0) {
        this.petDead()
        this.active_status = false

        clearInterval(hapInterval)
        console.log("you have died")

        Adapter.updatePetDB(this.id, {active_status: this.active_status})

      } else if (this.happiness >= 100) {
        this.petWinner()
        this.active_status = false

        clearInterval(hapInterval)
        console.log("you have won")
        
        Adapter.updatePetDB(this.id, {active_status: this.active_status})

      } else {
        this.pet_characteristics.forEach(char => {
          this.checkCharacteristic(char.name, char.action_time, char.action_status, char.interval, char)

        })

      }
    }, 5000)


    const petBtns = document.querySelector('#show-pet-buttons')
    petBtns.innerHTML = ''

  }

  updateDOM(){
    this.pName()

    this.pImg()

    this.pStats()

    // this.pBio()

    this.controlPanel()

    this.pHappiness()

  }

  petDead() {
    if (document.querySelector('#pet-pic').src !== 'http://pixelartmaker.com/art/06f25f9479449a7.png') {
      document.querySelector('#pet-pic').src = 'http://pixelartmaker.com/art/06f25f9479449a7.png'

    }
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.disabled = true)
    document.querySelector('#happiness').innerText = 'Dead'
    // debugger;

  }

  petWinner() {
    if (document.querySelector('#pet-pic').src !== 'http://pixelartmaker.com/art/370cf504dd15b00.png') {
      document.querySelector('#pet-pic').src = 'http://pixelartmaker.com/art/370cf504dd15b00.png'

    }
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.disabled = true)
    document.querySelector('#happiness').innerText = 'Won'
    // debugger;

  }

  checkCharacteristic(char, timeName, status, newInterval, c){
    // debugger

    if (new Date() >= c.check_time) {
      document.getElementById(`${c.name}`).disabled = false

      console.log('Time to do something with your pet...')
      this.pNotifications(c)

      if (c.action_status === false){
        this.happiness -= c.decr
        console.log(`Oh no, you went down ${c.decr} points!`)
        this.pHappiness(this.happiness)
      }
      c.action_status = false
      c.check_time = new Date(Date.now() + c.interval)
      
      //patch data back to Pets table in db
      const petData = {active_status: this.active_status, happiness: this.happiness}
      Adapter.updatePetDB(this.id, petData)

      //patch data back to Pet Characteristics table
      const petCharData = {check_time: c.check_time}
      Adapter.updatePetCharDB(c.id, petCharData)
    }

    // this.pet_characteristics.forEach(characteristic => {
    //   if (characteristic.name === char) {
    //     this[timeName] = new Date(characteristic.calculate_check_time)

    //     if ( new Date() >= (new Date(this[timeName] - (characteristic.interval/2))) && this[status] === false) {
    //       document.getElementById(`${characteristic.name}`).disabled = false
    //     }
    //     if (new Date() >= this[timeName]) {
    //       //check if pet is fed to change happiness
    //       if (this[status] === false) {
    //         // debugger
    //         this.happiness -= characteristic.decr
//             console.log(`Oh no, you went down ${characteristic.decr} points!`)
//             this.pHappiness(this.happiness)
//           } else if (this[status] === true ) {
// //          this.happiness += characteristic.incr
//           }

//         this[status] = false
//         this[timeName] = new Date (Date.now() + newInterval)
//         characteristic.calculate_check_time = this[timeName]

//         //patch data back to Pets table
//         const petData = {active_status: this.active_status, happiness: this.happiness}
//         Adapter.updatePetDB(this.id, petData)

//         //patch data back to Pet Characteristics table
//         const petCharData = {check_time: this[timeName]}

//         Adapter.updatePetCharDB(characteristic.id, petCharData)
// //      document.getElementById(`${characteristic.name}`).disabled = false
//         }
//       }
//     }
//   )
  }


}

//contains all instantiated pets
Pet.all = []
