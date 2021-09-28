import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
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

    useEffect(() => {
        (async () => {
            try {
                const roomResult = await api.get(
                    `/room/${roomId}`
                );
                const reviewsResult = await api.get(
                    `/review/${roomId}`
                );
                console.log(reviewsResult)
                setroom({ ...roomResult.data });
                setReviews([...reviewsResult.data]);
                setLoading(false);
            } catch (error) {
                console.error(error);
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
                        <img src={room.imageUrl} alt="" />
                    </div>
                    <div className="overflow-scroll w-50">
                        <h6>Reviews:</h6>
                        {reviews.map((review) => (
                            <ReviewCard key={review._id} review={review} />
                        ))}
                        {!showForm ? (
                            <ReviewForm toggleForm={toggleForm} roomId={roomId} />
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
