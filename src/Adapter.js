class Adapter {
  
  static getPet(id){
    return fetch(`${Adapter.baseUrl}/${id}`)
    .then(res => res.json())

  }
}

Adapter.baseUrl = `http://localhost:3000/api/v1/pets`
Adapter.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}