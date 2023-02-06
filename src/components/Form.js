import React, { useState } from "react";

function Form() {
    const [formType, setFormType] = useState(true)
    const [goalData, setGoalData] = useState({
        name: '',
        progress: ''
    })
    const [taskData, setTaskData] = useState({
        name: '',
        time: ''
    })
    const [shoppingData, setShoppingData] = useState({
        name: '',
        category: ''
    })

    return (
        <section id="new-item-form">
            <h3>Add a new item to your weekly agenda</h3>
            <form>
                <select
                    name="form-type">
                        <option value="goal">Goal</option>
                        <option value="task">Task</option>
                    </select>
                    <input
                    className="description"
                    type="text"
                    placeholder="Description"
                    name="name"
                    value={formType ? goalData.name : taskData.name}
                    />
            </form>
        </section>
    )
}

export default Form;