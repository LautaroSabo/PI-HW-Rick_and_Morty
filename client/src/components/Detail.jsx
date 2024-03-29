//import React from "react";
import axios from "axios"
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () =>{
    const {id} = useParams()
    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(

        <div>
            {character ? 
            <div>
                <h2>{character.name}</h2>
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.origin ? character.origin.name : null}</h2>
                <img src={character.image} alt="" />
                
            </div> :null} 
        </div>
    )
}

export default Detail

// {character.origin&&(
//     <p>{character.origin.name}</p>
// )}