const getCategoryItem = (category) => {
  if (category === '鬼殺隊') return 'kisatsutai'
  if (category === '鬼') return 'oni'
  if (category === '柱') return 'hashira'
  return 'sonota'
}
export default getCategoryItem