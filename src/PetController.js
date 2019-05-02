class PetController{

  static currentPet(id){
    Adapter.getPet(id)
    .then(petObj => {
    const newPet = new Pet(petObj)
    newPet.showSkeletonBody()
    })

  }

  static manyPets(){
    //instantiate all pets from database
    Adapter.getAllPets()
    .then(petObj => {
      petObj.forEach(pet => new Pet(pet))
    }).then(() => renderAllPetButtons())

  }
















  static renderPetForm() {
    document.querySelector('#main-container').innerHTML = `
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
                                                      <label class="label is-large">Name</label>
                                                      <div class="control">
                                                      <input class="input is-large" type="text" placeholder="Enter Pet Name"/>
                                                      </div>
                                                      </div>
                                                      <div class="field">
                                                      <label class="label is-large">Age</label>
                                                      <div class="control">
                                                      <input class="input is-large" type="text" placeholder="Enter Pet Age"/>
                                                      </div>
                                                      </div>


                                                      <div class="field">
                                                      <label class="label is-large">Image</label>
                                                      <div class="control">
                                                      <input id="image-input" class="input is-large" type="text" placeholder="Choose From Pet Gallery Below"/>
                                                      </div>
                                                      </div>

                                                      <div class="field">
                                                      <label class="label is-large">Bio</label>
                                                      <div class="control">
                                                      <textarea class="input is-large" type="text" placeholder="Enter Pet Bio" id="area"></textarea>
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
    document.querySelector("#pet-button-1").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-2").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-3").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-4").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-5").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-6").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-7").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-8").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-9").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-10").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-11").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-12").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-13").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-14").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-15").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-16").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-17").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-18").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-19").addEventListener('click', handleClickOfPetImage)
    document.querySelector("#pet-button-20").addEventListener('click', handleClickOfPetImage)
  }

  static attachEventListeners() {
    document.querySelector('#pet-form').addEventListener('submit', handleFormSubmit)
  }
}

function handleFormSubmit(event) {
  event.preventDefault()
  const body = {
    name: document.querySelectorAll('input')[0].value,
    age: document.querySelectorAll('input')[1].value,
    image: document.querySelectorAll('input')[2].value,
    bio: document.querySelector('textarea').value
  }
  Adapter.createPet(body).then(newPet => {
    console.log(newPet)
    // debugger
    newPet = new Pet(newPet)
    newPet.showSkeletonBody()
  })
  const petBtns = document.querySelector('#show-pet-buttons')
  petBtns.innerHTML = ''
}

function handleClickOfPetImage(event) {
  let id = parseInt(event.currentTarget.dataset.id)
  document.querySelector("#image-input").value = document.querySelector(`#pet-image-${id}`).src
  document.querySelector("#main-pet").src = document.querySelector(`#pet-image-${id}`).src
}
