import { useReducer, useState } from "react";
import {CLEAR_ALL,RESET_LISTS,REMOVE_ITEM} from "./actions";
import reducer from "./reducer";
import { useGlobalContext } from "../Context";


const data = [
    {name:"John",id:1},
    {name:"Rama",id:2},
    {name:"Sita",id:3},
    {name:"Arjuna",id:4},
];




const defaultState={
    people:data,
    isLoading:false
}


// const reducer =(state,action)=>{

//     if(action.type===REMOVE_ITEM){
//         console.log(state,action)
//         state.people=state.people.filter((i)=> i.id !== action.id)
//         return {...state}
//     }
    
//     if(action.type===CLEAR_ALL){
//         console.log(state.people)
//         return {...state,people:[]}
//     }

//     if(action.type === RESET_LISTS){
//         return {...state,people:data}
//     }

//     throw new Error(`No matching "${action.type}" - action type`);
// }

const ReducerBasic = ()=>{
    const {name,SetName} = useGlobalContext();
    // const [people , setPeople] = useState(data);

    const [state,dispatch] = useReducer(reducer,defaultState);
 
    const removeItem = (id)=>{
        // let newPeople = people.filter((p)=>p.id != id);
        // setPeople(newPeople);

        dispatch({type:REMOVE_ITEM,id});
    }

    const clearList =()=>{
        // setPeople([])
        dispatch({type:CLEAR_ALL});
    }

    const resetList=()=>{
        // setPeople(data)
        dispatch({type:RESET_LISTS});
    }
// console.log(state,dispatch)
// people = state.people
    return (

    <div className="basicReducer">
        <h3>Basic Reducer</h3>
        <h3>Global Context Name : {name}</h3>
       {state.people && 
        state.people.map((p)=>{
           return (<div key={p.id} className="list"><div> {p.name} </div> <button onClick={()=>removeItem(p.id)}>Remove</button> </div>)
        })
       }

       {
        state.people.length==0 && <button onClick={resetList} style={{color :'#ff2121f7'}}>Reset</button>
       }
       {
        state.people.length>0 && <button onClick={clearList} style={{color :'blue'}}>Clear All</button>
       }


    </div>
    )
}

export default ReducerBasic;