import dataView from './utils/function.js'

document.addEventListener('DOMContentLoaded', dataView('all'))

document.addEventListener('click', (event) => {
  const target = event.target.id
  if (target === 'all') dataView('all')
  if (target === 'kisatsutai') dataView('kisatsutai')
  if (target === 'oni') dataView('oni')
  if (target === 'hashira') dataView('hashira')
})