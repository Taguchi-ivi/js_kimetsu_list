const getData = async (name) => {
  const API_URL = 'https://ihatov08.github.io/kimetsu_api'

  const response = await fetch(API_URL + `/api/${name}.json`)
  const data = await response.json()
  return data
}

export default getData