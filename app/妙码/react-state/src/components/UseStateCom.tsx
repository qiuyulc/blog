import {useState} from 'react';
const UseStateCom = ()=>{
    const [count,setCount] = useState(0);

    const handleClick = ()=>{
        setCount(c=>c+1);
    }

    return <div>
        <h2>useState</h2>
        {count}
        <button onClick={handleClick}>+</button>
    </div>
}

export default UseStateCom;