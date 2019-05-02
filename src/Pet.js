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
  //method to dynamically create characteristic check_time for new pets
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
  
  pName(){
    //update main pet name with rendered pet
    document.querySelector("#pet-name").innerText = this.name
  }

  pStats(){
    //Possibly replace with Pet Level
    //update pet stats with info about rendered pet
    document.querySelector("#pet-stats").innerText = `Age: ${this.age}`
  }

  pImg(){
    //update main pet image
    document.querySelector("#pet-pic").src = this.image
  }

  // pBio(){
  //   May use if multiple users are added.
  //   create div to display bio
  //   const bio = document.querySelector("#pet-bio")
  
  //   bio.innerText = `Bio: ${this.bio}`
  // }

  pNotifications(c){
    
    //appends notifications to the notification div for active pets only
    if (this.active_status && !c.action_status) {
      const stats = document.querySelector("#pet-notifications")
      const notification = document.createElement("div")
      const del_btn = document.createElement('button')

      del_btn.className='delete'
      notification.className = 'tag is-danger'
      notification.innerText = `It is time to ${c.action} your pet!`

      notification.append(del_btn)
      stats.append(notification)

      del_btn.addEventListener('click', () => {
        stats.removeChild(notification)
      })
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

    if (this.active_status) {
      const petData = {happiness: this.happiness}
      Adapter.updatePetDB(this.id, petData)
    }
  }

  controlPanel() {
    //update control panel
    const ctrlPanel = document.querySelector("#control-panel")

    //create action buttons for each characterstic and add event listeners
    this.pet_characteristics.forEach(characteristic => {
      const a = document.createElement("button")
        a.classList = "button is-link"
        a.innerText = characteristic.name
        a.id = characteristic.name
        a.disabled = characteristic.action_status

        a.addEventListener("click", () => {
          // disable button until check_time is reached, increase and update happiness, and update action status
          a.disabled = true
          characteristic.action_status = true
          this.happiness += characteristic.incr
          this.pHappiness(this.happiness)

          const petCharData = {action_status: true, check_time: characteristic.check_time}
          Adapter.updatePetCharDB(characteristic.id, petCharData)

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
                  <div id="pet-notifications">
                    <!-- Content -->
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

    // start setInterval for active pets only
    if(this.active_status) {
      // update check_time for each pet characteristic
      this.createChars()

      let hapInterval = setInterval(() => {

        if (this.happiness <= 0) {
          this.petDead()
          this.active_status = false
  
          clearInterval(hapInterval)
          console.log("you have died")
  
          Adapter.updatePetDB(this.id, {active_status: this.active_status, happiness: 0})
  
        } else if (this.happiness >= 100) {
          this.petWinner()
          this.active_status = false
  
          clearInterval(hapInterval)
          console.log("you have won")
          
          Adapter.updatePetDB(this.id, {active_status: this.active_status, happiness: 100, level: 2})
  
        } else {
          this.pet_characteristics.forEach(char => this.checkCharacteristic(char))
        }
      }, 1000)
    } else if (this.happiness >= 100) {
      this.petWinner()
    } else if (this.happiness >= 0) {
      this.petDead()
    }

    const petBtns = document.querySelector('#show-pet-buttons')
    petBtns.innerHTML = ''
  }

  updateDOM(){
    this.pName()

    this.pImg()

    this.pStats()

    this.controlPanel()

    this.pHappiness()

  }

  petDead() {
    document.querySelector('#pet-pic').src = 'images/loser.png'

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.disabled = true)
    document.querySelector('#happiness').innerText = 'Dead'
    document.querySelector('#pet-notifications').innerText = ''

  }

  petWinner() {
    document.querySelector('#pet-pic').src = 'images/winner.png'

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.disabled = true)
    document.querySelector('#happiness').innerText = 'Won'
    document.querySelector('#pet-notifications').innerText = ''

  }

  checkCharacteristic(c){
    if (new Date() >= c.check_time) {
      document.getElementById(`${c.name}`).disabled = false

      if (c.action_status === false){
        this.happiness -= c.decr
        console.log(`Oh no, you went down ${c.decr} points!`)
        this.pHappiness(this.happiness)
      }
      c.action_status = false
      c.check_time = new Date(Date.now() + c.interval)

      console.log(`New ${c.name} check_time`, c.check_time)
      this.pNotifications(c)

      //patch data back to Pets table in db
      const petData = {active_status: this.active_status, happiness: this.happiness}
      Adapter.updatePetDB(this.id, petData)

      //patch data back to Pet Characteristics table
      const petCharData = {check_time: c.check_time, action_status: false}
      Adapter.updatePetCharDB(c.id, petCharData)
    }
  }
}

//contains all instantiated pets
Pet.all = []
