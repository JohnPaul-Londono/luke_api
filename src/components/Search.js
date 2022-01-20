import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Search = (props) => {
    const history = useHistory();
    const [people_planets, setPeople_Planets] = useState("");
    const [id, setId] = useState("");
    // const[ formInfo, setFormInfo] = useState({
    //     people_planets: "",
    //     id: ""
    // });
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("submitted");
        history.push("/" + people_planets + "/" + id)
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} id='flexy'>
                <div className='search'>
                    <label> Search For: </label>
                    <select id='drop' onChange={(event) => (setPeople_Planets(event.target.value))}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div className='search'>
                    <label>Id: </label>
                    <input type="number" id='drop2'  onChange={(event) => (setId(event.target.value))} />
                </div>
                <input type='submit' id='button' />
            </form>
        </div>
    )
}

export default Search;