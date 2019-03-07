class Adapter {

  static getPet(id){
    return fetch(`${Adapter.baseUrl}/${id}`)
    .then(res => res.json())
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

  //Patch pet update to the database
  static updatePetDB(id, data) {
    fetch(`${Adapter.baseUrl}/${id}`, {
    method: "PATCH",
    mode: 'cors',
    headers: Adapter.headers,
    body: JSON.stringify(data)
  })
//  .then(res => res.json())
//  .then(console.log)

  }
}

Adapter.baseUrl = `http://localhost:3000/api/v1/pets`
Adapter.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
