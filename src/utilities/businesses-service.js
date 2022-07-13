import axios from "axios";
import { getToken } from './users-service'

const BASE_URL = 'http://localhost:8080/api/v1/businesses'

const baseUrl = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`

const apiKey = 'f-1jFqVGSwTBaRJlSDcGHZWBJRBbv9fnX1H3TpboI9eUVCsCt3U2eO5zwHkzKBUIFa1Wrg6zb5RCXHa2kKmREYNYSH8--GvkkBdAtLRte22CNVL_81kn3siaZB7OYnYx'

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


