import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
    return (
        <div key={room._id} className="card m-1 col-sm-12 col-md-6 col-lg-4">
            <h5 className="card-header">{room.name}</h5>
            <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-title">{room.description}</p>
                <div>
                    <img
                        src={
                            room.imageUrl ||
                            "https://blog.beerorcoffee.com/wp-content/uploads/2020/11/top-10-espacos-de-coworking-no-rio-confira-os-melhores-escritorios.jpg"
                        }
                        className="img-thumbnail"
                    />
                    <div className="d-flex align-items-center">
                        {room.userId === localStorage.getItem("userId") && (
                            <Link
                                className="btn btn-dark w-100 m-1"
                                to={`/room/form/${room._id}`}
                            >
                                Editar
                            </Link>
                        )}
                        <Link
                            className="btn btn-dark w-100 m-1"
                            to={`/rooms/${room._id}`}
                        >
                            Detalhes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
