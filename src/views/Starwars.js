import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Starwars = (props) => {
    const { people_planets, id } = useParams();
    const [starwars, setStarwars] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/" + people_planets + "/" + id)
            .then(res => {
                console.log(res);
                setStarwars(res.data);
            })
            .catch(err =>{
                console.log(err);
                setStarwars("");
            } )
    }, [people_planets, id])

    return (
        <div>
            {
                starwars.length <= 0 ?
                <h2>These are not droids gurl</h2>
                : people_planets === "people" ?

                    <div className="search">
                        <h1>{starwars.name}</h1>
                        <p> Height: {starwars.height} cm</p>
                        <p>Ma$$: {starwars.mass} kg</p>
                        <p>Hair Color: {starwars.hair_color}</p>
                        <p>Skin Color: {starwars.skin_color}</p>
                    </div>
                    : people_planets === "planets" ?
                    <div className="search">
                        <h1>{starwars.name}</h1>
                        <p> Climate: {starwars.climate}  &deg;</p>
                        <p>Population: {starwars.population} </p>
                        <p>Terrain: {starwars.terrain}</p>
                        <p>diameter: {starwars.diameter} </p>
                    </div> :""
            }
        </div>
    )
}

export default Starwars;