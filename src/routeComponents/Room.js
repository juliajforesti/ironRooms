import React, { useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm";
import api from "../configs/api";

const Room = (props) => {
    const {roomId} = props.match.params
    
    const [reviews, setReviews] = useState([]);
    const [room, setroom] = useState();
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const updateReviews = (newComment) => {
        setReviews([...reviews, newComment])
    }

    useEffect(() => {
        (async () => {
            try {
                const roomResult = await api.get(
                    `/room/${roomId}`
                );
                const reviewsResult = await api.get(
                    `/review/${roomId}`
                );
                setroom({ ...roomResult.data });
                setReviews([...reviewsResult.data]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    return (
        <div className="p-5">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="d-flex  justify-content-around w-100">
                    <div>
                        <h2 className="py-3">{room.name}</h2>
                        <p>{room.description}</p>
                        <img className='w-75' src={room.imageUrl} alt="" />
                    </div>
                    <div className="overflow-scroll w-50 mt-4">
                        <h6>Reviews:</h6>
                        {reviews.map((review) => (
                            <div key={review._id} className="card m-1 p-1">
                                <h4>{review.comment}</h4>
                            </div>
                        ))}
                        {showForm ? (
                            <ReviewForm toggleForm={toggleForm} roomId={roomId} updateReviews={updateReviews} />
                        ) : (
                            <button
                                onClick={toggleForm}
                                className="btn btn-dark w-100"
                            >
                                + Review
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Room;
