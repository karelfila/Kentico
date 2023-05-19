import React, {useState} from 'react'
import "./App.css"


function App() {

    const [input, setInput] = useState("")
    const [items, setItems] = useState([])

    function addItem() {

        if (!input) {
            alert("Please enter a new task...")
            return;
        }


        const item = {
            id: Math.floor(Math.random() * 1000),
            value: input
        };

        setItems(oldList => [...oldList, item])

    }

    function deleteItem(id) {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    return (


        <div className="container text-center mt-5">
            <h1>To-Do List</h1>

            <div className="mt-5">
                <div className="d-flex justify-content-around">
                    <input type="text" className="task-input form-control w-25" placeholder="Finish my homework..."
                           value={input}
                           onChange={e => setInput(e.target.value)}
                    />
                </div>
                <button onClick={() => addItem()} className="btn btn-primary m-3">Add</button>
            </div>

            <div className="d-flex justify-content-around">
                <ul className="text-start list-unstyled w-25">

                    {items.map(item => {
                        return (
                            <li className="mt-2 d-flex justify-content-between border border-dark border-opacity-50 p-2 rounded-1" key={item.id}>{item.value}
                                <button onClick={() => deleteItem(item.id)} className="btn btn-danger">💣</button></li>
                        )
                    })}

                </ul>
            </div>
        </div>

    )
}

export default App;