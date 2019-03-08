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
                                                          <figure >
                                                            <img src="https://media.giphy.com/media/igFbTFGo9QN1B6H7Lg/giphy.gif">
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

                                                      <!-- <div class="field">
                                                      <label class="label is-large">Bio</label>
                                                      <div class="control">
                                                      <textarea class="input is-large" type="text" placeholder="Enter Pet Bio..." id="area"></textarea>
                                                      </div>
                                                      </div> -->
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
                                                        <button id="pet-button-1" data-id="1"><img class="pet-image" id="pet-image-1" src="https://thumbs.gfycat.com/ImpracticalWelcomeAndalusianhorse-small.gif"></button>
                                                        <button id="pet-button-2" data-id="2"><img class="pet-image" id="pet-image-2" src="https://i.imgur.com/dyW49tc.gif"></button>
                                                        <button id="pet-button-3" data-id="3"><img class="pet-image" id="pet-image-3" src="https://media1.giphy.com/media/10RgZyfaX0HBSg/giphy.gif"></button>
                                                        <button id="pet-button-4" data-id="4"><img class="pet-image" id="pet-image-4" src="https://cdn2.scratch.mit.edu/get_image/gallery/3705355_200x130.png"></button>
                                                        <button id="pet-button-5" data-id="5"><img class="pet-image" id="pet-image-5" src="https://thumbs.gfycat.com/CaringAdorableIrukandjijellyfish-size_restricted.gif"></button>
                                                        </div>
                                                        <div class="container pet-gallery">
                                                        <button id="pet-button-6" data-id="6"><img class="pet-image" id="pet-image-6" src="https://cdn2.scratch.mit.edu/get_image/gallery/5314106_200x130.png"></button>
                                                        <button id="pet-button-7" data-id="7"><img class="pet-image" id="pet-image-7" src="https://media.giphy.com/media/XpUcVJLv2YII8/giphy.gif"></button>
                                                        <button id="pet-button-8" data-id="8"><img class="pet-image" id="pet-image-8" src="https://data.whicdn.com/images/232263957/original.gif"></button>
                                                        <button id="pet-button-9" data-id="9"><img class="pet-image" id="pet-image-9" src="https://media.giphy.com/media/NMboetGVBoiCk/source.gif"></button>
                                                        <button id="pet-button-10" data-id="10"><img class="pet-image" id="pet-image-10" src="https://img.fireden.net/v/image/1521/42/1521420066820.gif"></button>
                                                        </div>
                                                        <div class="container pet-gallery">
                                                        <button id="pet-button-11" data-id="11"><img class="pet-image" id="pet-image-11" src="https://art.ngfiles.com/images/762000/762704_rflowers_witch.gif"></button>
                                                        <button id="pet-button-12" data-id="12"><img class="pet-image" id="pet-image-12" src="https://media.giphy.com/media/NmOoPAu8Mmhkk/giphy.gif"></button>
                                                        <button id="pet-button-13" data-id="13"><img class="pet-image" id="pet-image-13" src="https://i.pinimg.com/originals/2f/c1/b8/2fc1b8f82e14172e3bcae39ca8c8ab33.gif"></button>
                                                        <button id="pet-button-14" data-id="14"><img class="pet-image" id="pet-image-14" src="https://i.gifer.com/ZaiM.gif"></button>
                                                        <button id="pet-button-15" data-id="15"><img class="pet-image" id="pet-image-15" src="https://s-media-cache-ak0.pinimg.com/originals/46/6b/42/466b422c6a1ce24a6c4e20e62832d72a.jpg"></button>
                                                        </div>
                                                        <div class="container pet-gallery">
                                                        <button id="pet-button-16" data-id="16"><img class="pet-image" id="pet-image-16" src="https://files.gamebanana.com/img/ico/sprays/tanooki_s_ani_icon.gif"></button>
                                                        <button id="pet-button-17" data-id="17"><img class="pet-image" id="pet-image-17" src="https://thumbs.gfycat.com/AffectionateAdventurousLangur-size_restricted.gif"></button>
                                                        <button id="pet-button-18" data-id="18"><img class="pet-image" id="pet-image-18" src="https://orig00.deviantart.net/a157/f/2016/026/3/1/bull_man___custom_mega_man_boss_by_daltonkeslar1206-d9pfodm.gif"></button>
                                                        <button id="pet-button-19" data-id="19"><img class="pet-image" id="pet-image-19" src="https://orig00.deviantart.net/7429/f/2016/252/3/5/propeller_mushroom___super_mario_bros__3_style_by_skyzombie5-dah2z9d.gif"></button>
                                                        <button id="pet-button-20" data-id="20"><img class="pet-image" id="pet-image-20" src="https://i.imgur.com/da5LLrL.gif"></button>
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
    image: document.querySelectorAll('input')[2].value
  }
  Adapter.createPet(body).then(newPet => {
    console.log(newPet)
    newPet = new Pet(newPet)
    newPet.showSkeletonBody()
  })
  const buttonThing = document.querySelector('#show-pet-buttons')
  buttonThing.innerHTML = ''
}

function handleClickOfPetImage(event) {
  let id = parseInt(event.currentTarget.dataset.id)
  document.querySelector("#image-input").value = document.querySelector(`#pet-image-${id}`).src
}
