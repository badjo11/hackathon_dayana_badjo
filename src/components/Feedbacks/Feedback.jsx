import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'

const Feedback = (props) => {
    const [rating, setRating] = useState(0) // initial rating value
    console.log(props.doctor)
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate)
        // Some logic
    }
    return (
        <div>
            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
        </div>
    );
};

export default Feedback;