// import { useState, useEffect } from "react";
// import { getBusinesses } from "../../utilities/businesses-service";
import axios from "axios";
import Reviews from "../Reviews/Reviews";
import { useLocation, useNavigate } from 'react-router-dom'

const Businesses = ({ businesses }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const businessesDetails = location.state

    console.log(businesses)

    /* const [reviews, setReviews] = useState({})

    useEffect(() => {
        // getBusinesses()
        const getData = async () => {
            const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=San Francisco`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                },
                params: {
                    categories: 'breakfast_brunch',
                }
            })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log('error')
                })
            console.log(response)
        }
        getData()
    }, [])
 */

    return (
        <div class="card">
            {businesses.data.businesses.map(business => <div className="card-body">
                <h3 class="card-title" onClick={() => navigate(`/businesses/${business.id}`, { state: business })}>{business.name}</h3>
                <h4>Rating: {business.rating} Review count: {business.review_count}</h4>
                <h4>{business.price}</h4>
                <img src={business.image_url} class="card-img-left" width='200' height='200'></img>
            </div>)}
        </div>
    );
}

export default Businesses;
