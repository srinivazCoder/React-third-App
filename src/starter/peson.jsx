import { useEffect } from "react";

const Person=({ name,removePerson,id })=>{
    console.log('render',name,removePerson,id)

    // useEffect(()=>{
    //     console.log('Unfortunately does not fix the issue');
    // },[]);

    return (
        <div>
            <h3>{name}</h3>
            <button className="btn" onClick={()=>{console.log("triggeerd");removePerson(id);}}>remove</button>
        </div>
    )
}

export default Person;