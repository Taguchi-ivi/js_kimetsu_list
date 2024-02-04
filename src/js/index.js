
const BASE_URL = 'https://ihatov08.github.io'
const API_URL = BASE_URL + '/kimetsu_api'

// status: add or remove
const setLoading = (status) => {
  const loading = document.getElementById('loading')
  if (status === 'add') {
    loading.classList.add('active')
  } else {
    loading.classList.remove('active')
  }
}

const deleteElement = () => {
  const container = document.getElementById('item-list-container')
  if (container) container.remove()
}

const getCategoryItem = (category) => {
  if (category === '鬼殺隊') return 'kisatsutai'
  if (category === '鬼') return 'oni'
  if (category === '柱') return 'hashira'
  return 'sonota'
}

const createElementUl = () => {
  const newItem = document.createElement('ul')
  newItem.id = 'item-list-container'
  document.getElementById('item-list').appendChild(newItem);
}

const createItemList = (data) => {
  const newItem = document.createElement('li')
  newItem.innerHTML = `
  <img src="${BASE_URL + data.image}" alt="${data.name}">
  <h3>${data.name}</h3>
  <div class="item-list-category">
    <p class="${getCategoryItem(data.category)}">${data.category}</p>
  </div>
  `;
  document.getElementById('item-list-container').appendChild(newItem);
}

const getData = async (name) => {
  const response = await fetch(API_URL + `/api/${name}.json`)
  const data = await response.json()
  return data
}

// name: all, kisatsutai, oni, hashira
const dataView = async(name) => {

  deleteElement()
  setLoading('add')
  const res = await getData(name)
  createElementUl()
  res.forEach((item) => {
    createItemList(item)
  })
  setLoading('remove')
}

document.addEventListener('DOMContentLoaded', dataView('all'))

document.addEventListener('click', (event) => {
  const target = event.target.id
  if (target === 'all') dataView('all')
  if (target === 'kisatsutai') dataView('kisatsutai')
  if (target === 'oni') dataView('oni')
  if (target === 'hashira') dataView('hashira')
})