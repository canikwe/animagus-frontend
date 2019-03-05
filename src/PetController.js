class PetController{

  static currentPet(id){
    Adapter.getPet(id)
    .then(petObj => {
    const newPet = new Pet(petObj)
    newPet.showSkeletonBody()
    })

  }














  static renderPetForm() {
    document.querySelector('#main-container').innerHTML = `
                                                      <div class="container" id='pet-form-container'>
                                                      <div class="tile is-parent">
                                                      <article class="tile is-child notification is-warning">
                                                      <form id="pet-form">
                                                      <h1 class="title" id="create-pet ">Create New Pet</h1>
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
                                                      <textarea class="input is-large" type="text" placeholder="Enter Pet Bio..."></textarea>
                                                      </div>
                                                      </div>
                                                      <div class="field">
                                                      <div class="control">
                                                        <button class="button is-danger" type="submit">
                                                          Submit Pet
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
