import { useState } from "react";

const TodoItem = ({titl}) => {
    const [show, setShow] = useState(true)
    console.log(titl)
    const [title, setTitle] = useState(titl)
    const destry = () =>{
        setShow(false)
    }
    const titleSet = () =>{
        setTitle(prompt("Enter new Title"))
    }
    return ( 
        <>
            {(show)?(
            <div>
                <div>
                    <h1>{title}</h1>
                    {console.log(title)}
                </div>
                <div>
                    <button onClick={destry}>Delete</button>
                    <button onClick={titleSet}>Edit</button>
                </div>
            </div>):(<div></div>)}
        </>
    );
}
 
export default TodoItem;