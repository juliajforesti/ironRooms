import React, { useState, useEffect } from "react";
import RoomCard from "../components/RoomCard";
import api from "../configs/api";

const Home = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = async () => {
        try {
            const result = await api.get("/room/all");
            setRooms(result.data);
        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <div className="p-3 row justify-content-center">
            {rooms && rooms.map((room) => <RoomCard room={room} />)}
        </div>
    );
};

export default Home;
