import { memo, useState } from "react";
import { useGlobalContext } from "../Context";


const Counter = () => {
    const { name, setName } = useGlobalContext();
    const [count, setCount] = useState(0);

    const [glob, setGlob] = useState(name)
    const [change, SetChange] = useState(false)
    const handleChange = (e) => {
        e.preventDefault();
        setGlob(e.target.value)
        
    }
    const handleUpdate=()=>{
        setName(glob);
        setGlob('')
        SetChange(false)
    }

    const permitChangeGlobalName=()=>{
        SetChange(true)
        setGlob(name)
    }
    return (
        <div className="countBtn">

            <button onClick={() => setCount(count + 1)} >count <span style={{ color: '#a54a5a' }}>{count}</span></button>

            <p>Used context name { name }!<button className="Submit" onClick={permitChangeGlobalName}>Change {name} ??</button></p>


            {
                change &&
                <div>
                    <input type="text" onChange={handleChange} value={glob} />
                    <button className="Submit" onClick={handleUpdate }>OK</button>
                </div>
            }

                </div>
    )
}
            export default memo(Counter);