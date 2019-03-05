class Adapter {
  static getPet(id){
    fetch(`${Adapter.baseUrl}/${id}`)
    .then(res => res.json())
    .then(pet => {
      const newPet = new Pet(pet)
    })
  }

  //Post new pet to the backend database
  static createPet(body) {
    return fetch(`${Adapter.baseUrl}`, {
      method: "POST",
      mode: 'cors',
      body: JSON.stringify(body),
      headers: Adapter.headers
    }).then(res => res.json())
  }
}

Adapter.baseUrl = `http://localhost:3000/api/v1/pets`
Adapter.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
