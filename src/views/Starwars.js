import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Starwars = (props) => {
    const { people_planets, id } = useParams();
    const [starwars, setStarwars] = useState({});

    useEffect(() => {
        axios.get("https://swapi.dev/api/" + people_planets + "/" + id)
        .then(res => {
            console.log(res);
            setStarwars(res.data);
        })
        .catch (err => console.log(err))
    }, [people_planets, id])

    return (
        <div className="search">
            {starwars.name}
        </div>
    )
}

export default Starwars;