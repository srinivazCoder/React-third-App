import { useState } from "react";
import List from "./List";
import Form from "./Form";
import { useGlobalContext } from "../Context";

const data=[
    {id:1,name:'Homes'},
    {id:2,name:'Hotels'},
    {id:3,name:'Schools'},
];

const LowerStateChallenge=()=>{
    const {name,SetName} = useGlobalContext();
    const [people,setPeople] = useState(data);

    const addPerson=(name)=>{
        const fakeId =  Date.now();
        const newPerson = {id:fakeId,name}
        setPeople([ ...people, newPerson])
    }
    const removePerson=(id)=>{
       
        setPeople([...people.filter((i)=>i.id!==id)])
    }
    return(
        <section>
            {/* <p>{name}</p> */}
            <h1>Lower State Challange </h1>
            <h5>Used Context name : {name} </h5>
            <Form addPerson={addPerson}/>
            <List people={people} removePerson={removePerson}/>
        </section>
    )
} 
export default LowerStateChallenge