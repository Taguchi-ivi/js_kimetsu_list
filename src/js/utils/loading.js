// status: add or remove
const setLoading = (status) => {
  const loading = document.getElementById('loading')
  if (status === 'add') {
    loading.classList.add('active')
  } else {
    loading.classList.remove('active')
  }
}

export default setLoading