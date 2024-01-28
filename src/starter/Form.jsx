import { useState } from "react";

const Form=({addPerson})=>{
    // console.log(addPerson)
    const [name,setName] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name){
            alert('Please provide name');
            return
        }
        addPerson(name);
        setName("");

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <input type="text" id="name" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name}/>
                <br></br>
                <button  className="Submit" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;