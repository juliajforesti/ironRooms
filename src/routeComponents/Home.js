import React, {useState, useEffect} from "react";
import api from "../configs/api";


const Home = () => {
    useEffect(() => {
        getRooms()
    }, []);

    const getRooms = async() => {
    const token = localStorage.getItem('token')

        console.log(token)
        const result = await api.get('/rooms')
        console.log(result)
    }
    return <div></div>;
};

export default Home;
