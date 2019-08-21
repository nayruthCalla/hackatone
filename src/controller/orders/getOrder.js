const getOrders = (token, consultoraId) => {
  return fetch('http://165.22..131:4000/list/:consultantid', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    params: consultoraId
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'Ingrese token válido' })
    }
    return Promise.reject({ message: resp.statusText })
  })

}
export default getOrders;