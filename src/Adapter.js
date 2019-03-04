class Adapter {
  static getPet(id){
    fetch(`${Adapter.baseUrl}/${id}`)
    .then(res => res.json())
    .then(pet => {
      const newPet = new Pet(pet)
    })
  }
}

Adapter.baseUrl = `http://localhost:3000/api/v1/pets`
Adapter.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}