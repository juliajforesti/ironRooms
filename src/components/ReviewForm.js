import React, { useState } from "react";
import api from "../configs/api";

const ReviewForm = ({ toggleForm, roomId , updateReviews}) => {
    const [comment, setComment] = useState("");
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const result = await api.post(`/review/${roomId}`, {comment})
            console.log(result)
            updateReviews(result.data)
            setComment('')
        } catch (error) {
            console.error(error.response)
            setError(error.response.data.message)
        }
    }

    return (
        <form className=" py-3" onSubmit={handleSubmit}>
            <textarea
                className="form-control"
                value={comment}
                onChange={({ target: { value } }) => setComment(value)}
            />
            <div className="d-flex justify-content-between mt-2">
                <button onClick={toggleForm} className="btn btn-dark">
                    Cancelar
                </button>
                <button type="submit" className="btn btn-dark">
                    Enviar
                </button>
            </div>
            {error && (<p className='badge bg-danger mt-5'>{error}</p>)}
        </form>
    );
};

export default ReviewForm;
