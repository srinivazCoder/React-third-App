import {CLEAR_ALL,RESET_LISTS,REMOVE_ITEM} from "./actions";

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
const reducer =(state,action)=>{

    if(action.type===REMOVE_ITEM){
        console.log(state,action)
        state.people=state.people.filter((i)=> i.id !== action.id)
        return {...state}
    }
    
    if(action.type===CLEAR_ALL){
        console.log(state.people)
        return {...state,people:[]}
    }

    if(action.type === RESET_LISTS){
        return {...state,people:data}
    }

    throw new Error(`No matching "${action.type}" - action type`);
}

export default reducer;