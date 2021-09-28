import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../configs/api";

const FORM_VALUES = {
    name: "",
    description: "",
    imageUrl: "",
};

const RoomForm = (props) => {
    const roomId = props.match.params.roomId || undefined
    const [formValues, setFormValues] = useState({ ...FORM_VALUES });
    const history = useHistory()

    useEffect(() => {
        if (roomId){
            (async() => {
                try {
                    const result = await api.get(`/room/${roomId}`)
                    setFormValues({...result.data})
                } catch (error) {
                    
                }
            })()
        }
    }, []);

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            if (roomId) {
                await api.put(`/room/${roomId}`, formValues)
            } else {
                await api.post('/room', formValues)
            }
            history.push('/home')
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <form className="d-flex flex-column align-items-center pt-5" onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
                className="form-control w-50"
                type="text"
                value={formValues.name}
                name="name"
                onChange={({target: {name, value}}) => handleChange(name, value)}
            />

            <label>Descrição:</label>
            <input
                className="form-control w-50"
                type="text"
                value={formValues.description}
                name="description"
                onChange={({target: {name, value}}) => handleChange(name, value)}
            />

            <label>Imagem (link):</label>
            <input
                className="form-control w-50"
                type="text"
                value={formValues.imageUrl}
                name="imageUrl"
                onChange={({target: {name, value}}) => handleChange(name, value)}
            />

            <button type="submit">Salvar</button>
        </form>
    );
};

export default RoomForm;
