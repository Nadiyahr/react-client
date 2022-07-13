import axios from 'axios'
axios.defaults.withCredentials = true

export async function onLogUp(logupData: any) {
  return await axios.post(
    'http://localhost:5000/auth/signup',
    logupData
  )
}

export async function onLogin(loginData: any) {
  return await axios.post(
    'http://localhost:5000/auth/signin',
    loginData
  )
}

export async function onLogout() {
    return await axios.get('http://localhost:5000/auth/signout')
}

export async function fetchProtectedInfo(id: string) {
  return await axios.get(`http://localhost:5000/users/${id}`)
}
