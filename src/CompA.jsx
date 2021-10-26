import React, { useState,useEffect} from 'react';
import axios from "axios";

const CompA = () =>{
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          //  console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });
    return(
        <>
            <h1>Select any option:</h1>
            <select value={num} onChange={(event)=>{
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> 
            <h1>You have chosen : <span style={{color:'purple'}}>{num}</span></h1>
            <h1>The name of chosen Pokemon is <span style={{color:'green'}}>{name}</span></h1>
            <h1>Remaining moves of chosen Pokemon <span style={{color:'red'}}>{moves}</span> moves</h1>   
        </>
    )
};

export default CompA;