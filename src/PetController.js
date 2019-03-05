class PetController{

  static currentPet(id){
    Adapter.getPet(id)
    .then(petObj => {
    const newPet = new Pet(petObj)
    newPet.showSkeletonBody()
    })

  }














  static renderPetForm() {
    document.querySelector('#main-container').innerHTML = `<form id="pet-form">
                                                      <h1>Create New Pet</h1>
                                                      <label>Name</label>
                                                      <p>
                                                      <input type="text" value=""/>
                                                      </p>
                                                      <label>Age</label>
                                                      <p>
                                                      <input type="text" value=""/>
                                                      </p>
                                                      <label>Image</label>
                                                      <p>
                                                      <input type="text" value=""/>
                                                      </p>
                                                      <button type="submit">Submit Pet</button>
                                                    </form>`
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
}
