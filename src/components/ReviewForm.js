import React, { useState } from "react";
import api from "../configs/api";

const ReviewForm = ({ toggleForm, roomId }) => {
    const [comment, setComment] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const result = await api.post(`/review${roomId}`, {comment})
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form className=" py-3" onSubmit={handleSubmit}>
            <textarea
                className="form-control"
                value={comment}
                onChange={({ target: { value } }) => setComment(value)}
            />
            <div className="d-flex justify-content-between mt-1">
                <button onClick={toggleForm} className="btn btn-dark">
                    Cancelar
                </button>
                <button type="submit" className="btn btn-dark">
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default ReviewForm;
