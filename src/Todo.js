import React , {useState, useEffect} from "react";

export default function Todo() {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        let array = JSON.parse(localStorage.getItem("array"));
        setTodo(array);
    })

    const addText = () => {
        let array1 = todo; // this declaration refers  the memory
        let array = [...todo]; // this declares the actual values
        array.push(value);
        setValue("");
        setTodo(array);
        localStorage.setItem("array", JSON.stringify(array));
    }

    const deleteLast = ()=> {
        let array = [...todo];
        array.pop();
        setTodo(array);
        localStorage.setItem("array", JSON.stringify(array));
        console.log(array);
    }

    const deleteElement = (index) => {
        let array = [...todo];
        array.splice(index, 1);
        setTodo(array);
        localStorage.setItem("array", JSON.stringify(array));
    }

    const editElement = (index) => {
        let array = [...todo];
        let value = prompt("Enter the replacement value");
        array.splice(index, 1, value);
        setTodo(array);
        localStorage.setItem("array", JSON.stringify(array));   
        console.log(array);
    }

    return(
        <div>
            <div>
                {todo.map((item, index)=> {
                    return(
                        <div>
                            <h3>{index+1}.{item}</h3>
                            <button onClick={() => {
                                deleteElement(index);
                            }} >Delete me</button>
                            <button onClick={() => {
                                editElement(index);
                            }} >Edit me</button>
                        </div>
                    )
                })}
            </div>
            <input type="text" value={value} onChange={(event) => {
                setValue(event.target.value);
            }} />
            <button onClick={addText}>Add</button>
            <button onClick={() =>deleteLast()}>Delete Last element</button>
        </div>
    )
}