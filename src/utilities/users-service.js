import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/v1/users'

export const login = async credentials => {
    try {
        console.log('users service', credentials)
        const token = await axios.post(`${BASE_URL}/login`, credentials)

        // console.log(token.data)

        localStorage.setItem('token', token.data)
    } catch (e) {
        console.log(e)
    }
}

export const signUp = async newUser => {
    try {
        const token = await axios.post(BASE_URL, newUser)
        localStorage.setItem('token', token.data)
        
        // return getUser()
    } catch (e) {
        console.log(e)
    }
}

export const getToken = () => {
    const token = localStorage.getItem('token')
    if(!token) return null

    const payload = JSON.parse(atob(token.split('.')[1]))
    if(payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token')
        return null
    }

    return token
}

export const logOut = () =>  {
    localStorage.removeItem('token')
}
