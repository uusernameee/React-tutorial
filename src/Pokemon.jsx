import React,{useState,useEffect} from "react";
const Pokemon=()=>{
    const [num,setnum]=useState();
    const [name,setname]=useState();
    const [moves,setmoves]=useState();
    const func=(event)=>{
        setnum(event.target.value);
    };
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name);
            setmoves(res.data.moves.length);
        }
        getData();
    });
    return(
        <>
        <h1>You chose {num} value</h1>
        <h1>My name is {name}. My moves are {moves}.</h1>
<select onChange={func}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
        </>
    );
};
export default Pokemon;