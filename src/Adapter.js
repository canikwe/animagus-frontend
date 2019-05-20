class Adapter {
  static baseUrl() {
    return `http://localhost:3000/api/v1/pets`
  }

  static headers() {
    return ({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

//fetch all pets from the deebee
  static getAllPets(){
    return fetch(`${Adapter.baseUrl()}/`)
    .then(res => res.json())
  }

  //Post new pet to the backend database
  static createPet(body) {
    return fetch(`${Adapter.baseUrl()}`, {
      method: "POST",
      mode: 'cors',
      body: JSON.stringify(body),
      headers: Adapter.headers()
    })
    .then(res => res.json())
  }

  //Patch pet update to the database
  static updatePetDB(id, data) {
    fetch(`${Adapter.baseUrl()}/${id}`, {
      method: "PATCH",
      mode: 'cors',
      headers: Adapter.headers(),
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => console.log('pet updated on backend'))
  }
  
  //Patch pet characteristic update to the database
  static updatePetCharDB(id, data) {
    fetch(`http://localhost:3000/api/v1/pet_characteristics/${id}`, {
      method: "PATCH",
      mode: 'cors',
      headers: Adapter.headers(),
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
}

 module.exports = Adapter