import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/v1/businesses'

export const getBusinesses = async () => {
    try {
        const response = await axios.get(BASE_URL)
        console.log(response)
    } catch(e) {
        console.log(e)
    }
}