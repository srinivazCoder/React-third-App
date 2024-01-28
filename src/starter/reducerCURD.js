
const methods=(state,actions)=>{
    console.log(state,actions)

    if(actions.type==="ADD_USER"){
        state.data = [...state.data , {"name":actions.text, "id":actions.id}]
        return {...state}
    }else if(actions.type==="REMOVE_USER"){

        state.data = state.data.filter((e)=>e.id !== actions.id)
        console.log(state)
        return {...state}
    }
    else if(actions.type==="EDIT_USER"){
       
        let u = state.data.find((f)=>f.id==actions.id)
        return {...state,editUser:u,name:u.name}
    }
    else if(actions.type==="UPDATE_USER"){
       console.log(actions)
       return {
        ...state,
        data : state.data.map(e=> {
            if(e.id == state.editUser.id){
              return {...e,name:actions.text}
                
            }else{
                return e
            }
        })
       }
        
        console.log(state)
        // return {...state}
    }

}

export default methods