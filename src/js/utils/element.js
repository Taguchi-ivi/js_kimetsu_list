import getCategoryItem from './category.js'

const deleteElement = () => {
  const container = document.getElementById('item-list-container')
  if (container) container.remove()
}

const createElementUl = () => {
  const newItem = document.createElement('ul')
  newItem.id = 'item-list-container'
  document.getElementById('item-list').appendChild(newItem);
}

const createItemList = (data) => {
  const BASE_URL = 'https://ihatov08.github.io'
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

export { deleteElement, createElementUl, createItemList }