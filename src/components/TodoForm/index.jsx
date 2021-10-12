import React, { useState } from 'react';

function TodoForm(props) {
    const [value, setValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const formValues = {
            title: value
        }
        props.onSubmit(formValues)
        setValue('')
    }

    function handleChange(e) {
        setValue(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value}
                onChange={handleChange} />
        </form>
    );
}

export default TodoForm;