import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form ";
import FilterBotton from "./components/FilterButton";

// Consider why those statements are put outside of the App
const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Complete: (task) => task.completed 
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState("All");
    
    function toggleTaskCompleted(id) {
        const updateTasks = tasks.map((task) => { // Add ?
            if (task.id === id) {
                return { ...task, completed : !task.completed};
            }
            return task;        
        });
        setTasks(updateTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    function editTask(id, newName) {
        const editTaskList = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, name : newName };
            }
            return task;
        });
        setTasks(editTaskList);
    }

    const taskList = tasks
        .filter(FILTER_MAP[filter]) // Set filter before updating
        .map((task) => (
            <Todo 
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
        />
    ));

    // Replace {...} with (...) in map /filter
    const filterList = FILTER_NAMES.map((name) => (
    <FilterBotton 
        key={name} 
        name={name} 
        isPressed={name === filter}
        setFilter={setFilter}/>
    ));

    function addTask(name) {
        const newTask = { id:`todo-${nanoid()}`, name, completed:false };
        setTasks([...tasks, newTask]);
    }

    const taskNoun = tasks.length > 1 ? "tasks" : "task";
    const headingText = `${tasks.length} ${taskNoun} remaining`;

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form onSubmit={addTask} />
            <div className="filters btn-group stack-exception">{filterList}</div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList }
            </ul>
        </div>
    );
}

export default App;