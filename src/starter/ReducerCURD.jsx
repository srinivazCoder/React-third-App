import { useEffect, useReducer, useState } from "react";
import methods from "./reducerCURD";
const intialState = {
    data: [{ name: "apple", id: 1 }, { name: "banana", id: 2 }],
    editUser: {},
    name:""
}

const ReducerCURD = () => {
    const [state, dispatch] = useReducer(methods, intialState)
    const [id, setId] = useState(3);
    const [text, setText] = useState("");
    const [editCheck, setEditCheck] = useState(false);


    const handleChange = (e) => {
        setText(e.target.value)

    }

    const AddUser = () => {
        setId(id + 1)
        dispatch({ type: 'ADD_USER', text, id })
        setText('')

    }

    const RemoveUser = (id) => {
        dispatch({ type: 'REMOVE_USER', id })
    }
    const EditUser = (id) => {
        setEditCheck(true)
        
        dispatch({ type: 'EDIT_USER', id })
        console.log(state)
       
        let name_ = state?.name;
   
        setText(name_)

    }
    const UpdateUser = () => {
        dispatch({ type: 'UPDATE_USER',text})  
        setEditCheck(false)
        setText("")
        
    }
    return (
        <>
            <h3>CURD Operation Using "useReducer"</h3>
            <input type="text" onChange={handleChange} value={text||""} />
            {
                editCheck ? <button onClick={UpdateUser}>Update</button> : <button onClick={AddUser}>Add</button>
            }

            &nbsp;
            {
                state.data &&
                state.data.map((e) => {
                    return (
                        <div key={e.id}>
                            <div>

                                <p>{e.name}</p>
                                <button onClick={() => RemoveUser(e.id)}>Remove</button>
                                <button onClick={() => EditUser(e.id)}>Edit</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default ReducerCURD;
