import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../configs/api";

const Home = () => {
    const [rooms, setRooms] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = async () => {
        const result = await api.get("/room/all");
        setRooms(result.data);
    };

    return (
        <div className="p-3 d-flex">
            {rooms &&
                rooms.map((room) => (
                    <div key={room._id} className="card w-50 m-1">
                        <h5 className="card-header">{room.name}</h5>
                        <div className="card-body d-flex flex-column justify-content-between">
                            <p className="card-title">{room.description}</p>
                            <img
                                src={
                                    room.imageUrl ||
                                    "https://blog.beerorcoffee.com/wp-content/uploads/2020/11/top-10-espacos-de-coworking-no-rio-confira-os-melhores-escritorios.jpg"
                                }
                                className="img-thumbnail"
                            />
                            <div className="d-flex align-items-center">
                                <Link
                                    className="btn btn-dark w-50 m-1"
                                    to={`/room/form/${room._id}`}
                                >
                                    Editar
                                </Link>
                                <Link
                                    className="btn btn-dark w-50 m-1"
                                    to={`/rooms/${room._id}`}
                                >
                                    Detalhes
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Home;
