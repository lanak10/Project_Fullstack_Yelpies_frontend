import axios from "axios";
import { getToken } from './users-service'

const BASE_URL = 'http://localhost:8080/api/v1/businesses'

const baseUrl = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`

const apiKey = '3AuFQHw32r3F8xuguK8XVqJ_CtCZNMjopM5EpvEb1Lip5zHRQjZtzbXhbU1PYnFr31i6YyWBYkdisELZQKrFN9PJD1SE6KnSZ3-0NF6eeiZ8fmKpaqBD-aQ2li_OYnYx'

const setOptions = () => {
    return {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }
    }
}

export const getBusinesses = async (query) => {
    try {
        const response = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
            params: {
                location: 'Cambridge, MA',
                term: `${query}`,
                limit: 10
            }
        })
        return response
    } catch (e) {
        console.log(e)
    }
}

export const getReviews = async (id) => {
    try {
        const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}/reviews`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        return response
    } catch (error) {
        console.log(error)
    }
}


