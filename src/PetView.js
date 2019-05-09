class PetView {

  //homepage to render the pet create form and pet gallery
  static renderHomepage() {
      document.querySelector('#main-container').innerHTML = 
      `
        <div class="container" id='pet-form-container'>
        <div class="tile is-parent" id="make-a-pet">
          <article class="tile is-child notification is-info">
            <p class="title">Make a pet...</p>
            <p class="subtitle">...and keep it alive!</p>
            <figure id="figure" class="container">
              <img src="images/main_img.gif"
              id="main-pet" >
            </figure>
          </article>
        </div>
        <div class="tile is-parent" id="dog-form">
        <article class="tile is-child notification is-warning">
        <form id="pet-form">
        <h1 class="title" id="create-pet">Create New Pet</h1>
        <div class="field">
        <label class="label is-large" name="name">Name</label>
        <div class="control">
        <input class="input is-large" id="name" type="text" placeholder="Enter Pet Name"/>
        </div>
        </div>
        <div class="field">
        <label class="label is-large" name="age">Age</label>
        <div class="control">
        <input class="input is-large" type="text" id="age" placeholder="Enter Pet Age"/>
        </div>
        </div>


        <div class="field">
        <label class="label is-large" name="image">Image</label>
        <div class="control">
        <input id="image-input" class="input is-large" type="text" placeholder="Choose From Pet Gallery Below"/>
        </div>
        </div>

        <div class="field">
        <label class="label is-large" name="bio">Bio</label>
        <div class="control">
        <textarea class="input is-large" type="text" id="bio" placeholder="Enter Pet Bio" id="area"></textarea>
        </div>
        </div>
        <div class="field">
        <div class="control">
          <button class="button is-danger" type="submit">
            Submit Pet and Play
          </button>
        </div>
        </div>
      </form>
      </article>
      </div>
      </div>
      <div class="container" id="gallery-container">
      <div class="tile is-parent">

        <article class="tile is-child notification is-danger">
        <h1 class="title" id="gallery">Pet Gallery</h1>
          <div class="container pet-gallery">
          <button id="pet-button-1" data-id="1"><img class="pet-image" id="pet-image-1" src="images/ImpracticalWelcomeAndalusianhorse-small.gif"></button>
          <button id="pet-button-2" data-id="2"><img class="pet-image" id="pet-image-2" src="images/dyW49tc.gif"></button>
          <button id="pet-button-3" data-id="3"><img class="pet-image" id="pet-image-3" src="images/spinning_mario.gif"></button>
          <button id="pet-button-4" data-id="4"><img class="pet-image" id="pet-image-4" src="images/dolphin.gif"></button>
          <button id="pet-button-5" data-id="5"><img class="pet-image" id="pet-image-5" src="images/CaringAdorableIrukandjijellyfish-size_restricted.gif"></button>
          </div>
          <div class="container pet-gallery">
          <button id="pet-button-6" data-id="6"><img class="pet-image" id="pet-image-6" src="images/CaringAdorableIrukandjijellyfish_pink.png"></button>
          <button id="pet-button-7" data-id="7"><img class="pet-image" id="pet-image-7" src="images/waving_panda.gif"></button>
          <button id="pet-button-8" data-id="8"><img class="pet-image" id="pet-image-8" src="images/peek-a-boo.gif"></button>
          <button id="pet-button-9" data-id="9"><img class="pet-image" id="pet-image-9" src="images/peace_pet.gif"></button>
          <button id="pet-button-10" data-id="10"><img class="pet-image" id="pet-image-10" src="images/lil_bounce.gif"></button>
          </div>
          <div class="container pet-gallery">
          <button id="pet-button-11" data-id="11"><img class="pet-image" id="pet-image-11" src="images/rflowers_witch.gif"></button>
          <button id="pet-button-12" data-id="12"><img class="pet-image" id="pet-image-12" src="images/princess.gif"></button>
          <button id="pet-button-13" data-id="13"><img class="pet-image" id="pet-image-13" src="images/swinging_blob.gif"></button>
          <button id="pet-button-14" data-id="14"><img class="pet-image" id="pet-image-14" src="images/mario_and_yoshi.gif"></button>
          <button id="pet-button-15" data-id="15"><img class="pet-image" id="pet-image-15" src="images/orange_and_black_mario.jpg"></button>
          </div>
          <div class="container pet-gallery">
          <button id="pet-button-16" data-id="16"><img class="pet-image" id="pet-image-16" src="images/tanooki_s_ani_icon.gif"></button>
          <button id="pet-button-17" data-id="17"><img class="pet-image" id="pet-image-17" src="images/AffectionateAdventurousLangur-size_restricted.gif"></button>
          <button id="pet-button-18" data-id="18"><img class="pet-image" id="pet-image-18" src="images/bull_man___custom_mega_man_boss_by_daltonkeslar1206-d9pfodm.gif"></button>
          <button id="pet-button-19" data-id="19"><img class="pet-image" id="pet-image-19" src="images/propeller_mushroom___super_mario_bros__3_style_by_skyzombie5-dah2z9d.gif"></button>
          <button id="pet-button-20" data-id="20"><img class="pet-image" id="pet-image-20" src="images/da5LLrL.gif"></button>
          </div>
        </article>
      </div>
      </div>
      `

      PetView.clearPetBtns()
  }

  //skeleton of show page to display the proper divs. To be updated with proper pet information upon successfull instantiation
  static renderGamePlay() {
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
              </div>
            `
  }

  //create action buttons for characterstic in control panel
  static controlPanel(characteristic, pet) {
    const ctrlPanel = document.querySelector("#control-panel")
    const btn = document.createElement("button")

    btn.classList = "button is-link"
    btn.innerText = characteristic.name
    btn.id = characteristic.name
    btn.disabled = characteristic.action_status

    //append buttons to control panel div
    ctrlPanel.append(btn)

    //add notifications to the stats div
    PetView.pNotifications(characteristic, pet)

    //return button to PetController to add event listeners
    return btn
  }

  //disable button so player cannot gain extra points before the check_time has been reached
  static disableBtn(btn) {
    btn.disabled = true
  }

  static activateBtn(btn) {
    btn.disabled = false
  }

  //append notifications to the notification div for active pets only
  static pNotifications(c, pet){
    if (pet.active_status && !c.action_status) {
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

  // update main-container div with current pet's information
  static updateDOM(pet){
    document.querySelector("#pet-name").innerText = pet.name

    document.querySelector("#pet-pic").src = pet.image

    document.querySelector("#pet-stats").innerText = `Age: ${pet.age}`

    PetView.updateHappiness(pet.happiness)    
  }

  static updateHappiness(happiness) {
    document.querySelector("#happiness").innerText = happiness
  }

  // create a button for each pet pulled from the database and instantiated client-side
  static renderPetBtn(pet) {
    const petBtn = document.createElement('button')
    const div = document.querySelector('#show-pet-buttons')

    petBtn.innerText = pet.name
    petBtn.id = 'back'
    petBtn.className = "button is-warning pet"
    
    div.appendChild(petBtn)
    return petBtn
  }

  // clear buttons from the show-pet-buttons div while game is in play
  static clearPetBtns() {
    const petBtns = document.querySelector('#show-pet-buttons')
    petBtns.innerHTML = ''
  }

  static renderBackBtn() {
    const backBtn = document.createElement('button')
    const div = document.querySelector('#show-pet-buttons')

    backBtn.innerText = 'Back'
    backBtn.className = 'button is-warning'

    div.appendChild(backBtn)
    return backBtn
  }

// update main-container to show final status of the game
  static endGame(pet) {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.disabled = true)

    if (pet.happiness <= 0) {
      document.querySelector('#pet-pic').src = 'images/loser.png'
      document.querySelector('#happiness').innerText = 'Dead'
    } else if (pet.happiness >= 100) {
      document.querySelector('#pet-pic').src = 'images/winner.png'
      document.querySelector('#happiness').innerText = 'Won'
    }

    document.querySelector('#pet-notifications').innerText = ''
  }

}