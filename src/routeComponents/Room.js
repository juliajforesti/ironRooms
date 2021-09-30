import React, { useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm";
import api from "../configs/api";

const Room = (props) => {
    const { roomId } = props.match.params;
    const userId = localStorage.getItem('userId')

    const [room, setRoom] = useState();
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const roomResult = await api.get(`/room/${roomId}`);
                setRoom({ ...roomResult.data });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const updateReviews = (newComment) => {
        setRoom({...room, reviews: [...room.reviews, newComment]});
    };

    return (
        <div className="p-5">
            {loading ? (
                <div class="spinner-border text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="d-flex  justify-content-around w-100">
                    <div>
                        <h2 className="py-3">{room.name}</h2>
                        <p>{room.description}</p>
                        <img className="w-75" src={room.imageUrl} alt="" />
                    </div>
                    <div className="overflow-scroll w-50 mt-4">
                        <h6>Reviews:</h6>
                        {room.reviews && room.reviews.map((review) => (
                            <div key={review._id} className="card m-1 p-1">
                                <h5>{review.comment}</h5>
                            </div>
                        ))}
                        {showForm ? (
                            <ReviewForm
                                toggleForm={toggleForm}
                                roomId={roomId}
                                updateReviews={updateReviews}
                            />
                        ) : (
                            userId !== room.userId && 
                            <button
                                onClick={toggleForm}
                                className="btn btn-dark w-100"
                            >
                                Comentar
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Room;
