import setLoading from './loading.js'
import getData from './api.js'
import { deleteElement, createElementUl, createItemList } from './element.js'

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
export default dataView