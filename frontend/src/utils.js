export const csrf_token = () => {
  let cookieValue = null,
      name = 'csrftoken'

  if(document.cookie) {
    const cookies = document.cookie.split(';')
    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim()
      if(cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }

  return cookieValue
}