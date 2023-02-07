import React, { useState } from "react";

function Form({ addNewItem }) {
    const [formType, setFormType] = useState(true)
    const [goalData, setGoalData] = useState({
        name: '',
        progress: ''
    })
    const [taskData, setTaskData] = useState({
        name: '',
        time: '', 
        isCompleted: false
    })

    function handleTypeChange() {
        setFormType(!formType)
    }

    function handleChange(e) {
        if (formType) {
            setGoalData({
            ...goalData, [e.target.name] : e.target.value,
            })
        } else {
            setTaskData({
            ...taskData, [e.target.name] : e.target.value
            })
        }
    }

    function handleSubmit(e) {
        console.log(formType)
        e.preventDefault()
       let type;
        if(formType) {
            type = "goals"
        } else { type = "tasks"}

        fetch(`http://localhost:3004/${type}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formType ? goalData : taskData)
            })
            .then(resp => resp.json())
            .then(newItem => addNewItem(newItem, type))
        formType ? setGoalData({name: '', progress: ''}) :
        setTaskData({name: '', time: ''})
    }

    return (
        <section id="new-item-form">
            <span>Add a new item to your weekly agenda</span>
            <form onSubmit={handleSubmit}>
                <select
                    name="form-type"
                    onChange={handleTypeChange}
                    >
                        <option value="goal">Goal</option>
                        <option value="task">Task</option>
                    </select>
                    <input
                    onChange={handleChange}
                    className="description"
                    type="text"
                    placeholder="Description"
                    name="name"
                    value={formType ? goalData.name : taskData.name}
                    />
                {formType ? 
                    <label>
                        <input
                        onChange={handleChange}
                        type="number"
                        placeholder="% completed"
                        name="progress"
                        value={goalData.progress}
                        />
                    </label> :
                    <label>
                        <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Time for task"
                        name="time"
                        value={taskData.time}
                        />
                    </label>}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Form;