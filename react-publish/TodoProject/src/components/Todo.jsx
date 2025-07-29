import { useRef, useState } from "react";

function Todo(props) {
    const [isEditting, setEditting] = useState(false);
    const [newName, setNewName] = useState("");
    const editFiledRef = useRef("");
    const editButtonRef = useRef("");

    function handleChange(event) {
        setNewName(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.editTask(props.id, newName)
        setNewName("");
        setEditting(false);
    }
    
    const edittingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    The new name for {props.name}
                </label>
                <input 
                    type="text" 
                    id={props.id} 
                    className="todo-text"
                    value={newName}
                    onChange={handleChange}
                    ref={editFiledRef}/>
            </div>
            <div className="btn-group">
                <button 
                    type="button" 
                    className="btn todo-cancel"
                    onClick={()=>{setEditting(false)}}>
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input 
                    type="checkbox" 
                    id={props.id} 
                    defaultChecked={props.completed} 
                    onChange={() => {props.toggleTaskCompleted(props.id)}}/> 
                <label className="todo-label" htmlFor="todo-0">{props.name}</label>
            </div>
            <div className="btn-group">
                <button 
                    type="button" 
                    className="btn"
                    onClick={()=> {setEditting(true)}}
                    ref={editButtonRef}>
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button 
                    type="button" 
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}>
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );
    console.log(editButtonRef);
    return(
        <li className="todo stack-small">
            {isEditting ? edittingTemplate : viewTemplate}
        </li>
    );
}

export default Todo;