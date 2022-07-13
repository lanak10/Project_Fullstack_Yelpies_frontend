import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getReviews } from '../../utilities/businesses-service'
import { useState } from 'react'

const BusinessDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const BusinessDetails = location.state
    // console.log(BusinessDetails)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        (async () => {
            const reviews = await getReviews(BusinessDetails.id)
            console.log(reviews) // response reviews
            setReviews(reviews.data.reviews)
        })()
    }, [])
    console.log(reviews) // state reviews

    return (
        <div>
            Business Details and reviews
            {reviews.map(review => 
                <div>
                <p>{review.text}</p>
                 
                </div>
            )} 
        </div>
    );
}

export default BusinessDetails;
