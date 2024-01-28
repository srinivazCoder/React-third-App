import { useState } from "react";
import List from './List';
import Counter from './Counter';

const data=[
    {id:1,name:'Cards'},
    {id:2,name:'Trees'},
    {id:3,name:'Homes'},
]
const LowerState=()=>{
    const  [people,setPeople] = useState(data);
    // const [count,setCount] = useState(0);

    const removePerson = (id)=>{
        console.log("remove")
        const newPerson = people.filter((person)=>person.id != id);
        setPeople(newPerson)
    }
    
    return(
        <section className="counterList">
            <Counter/>
            <List people={people} removePerson={removePerson}/>
        </section>
    )
 }

export default LowerState;