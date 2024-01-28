import Person from "./peson";
import { memo } from "react";

const List = ({people,removePerson})=>{
    console.log("User____",people,removePerson)
    return (
        <div>
            {people.map((person)=>{
                return <Person   key={person.id}{...person} removePerson={removePerson} />
            })}
        </div>
    )
}

// export default List;
export default memo(List);