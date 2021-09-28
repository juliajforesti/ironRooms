import React, {useEffect} from "react";

const ReviewCard = ({ review }) => {

    return (
        <div key={review._id} className="card m-1 p-1">
            <h4>{review.comment}</h4>
        </div>
    );
};

export default ReviewCard;
