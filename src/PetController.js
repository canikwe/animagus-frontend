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
                                                      <div class="tile is-parent">
                                                        <article class="tile is-child notification is-info">
                                                          <p class="title">Make a pet...</p>
                                                          <p class="subtitle">...and keep it alive!</p>
                                                          <figure >
                                                            <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/pembroke-welsh-corgi.jpg">
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
                                                      <input class="input is-large" type="text" placeholder="Enter Pet Name..."/>
                                                      </div>
                                                      </div>
                                                      <div class="field">
                                                      <label class="label is-large">Age</label>
                                                      <div class="control">
                                                      <input class="input is-large" type="text" placeholder="Enter Pet Age..."/>
                                                      </div>
                                                      </div>
                                                      <div class="field">
                                                      <label class="label is-large">Image</label>
                                                      <div class="control">
                                                      <input class="input is-large" type="text" placeholder="Enter Image Url..."/>
                                                      </div>
                                                      </div>
                                                      <div class="field">
                                                      <label class="label is-large">Bio</label>
                                                      <div class="control">
                                                      <textarea class="input is-large" type="text" placeholder="Enter Pet Bio..." id="area"></textarea>
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
                                                    `
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
    newPet = new Pet(newPet)
    newPet.showSkeletonBody()
  })
}
