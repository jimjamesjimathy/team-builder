import React from "react";



const Form = (props) => {
    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label><h2>Name</h2>
            <input 
            placeholder='Your name here'
            value={props.values.name}
            name='name'
            onChange={handleChange}
            />
            </label>
            <label><h2>Email</h2>
                <input
                    placeholder='Enter email here'
                    value={props.values.email}
                    name='email'
                    onChange={handleChange}
                    />

            </label>
            <label><h2>Role</h2>
                    <select value={props.values.role} name='role' onChange={handleChange}>
                        <option value=''>Choose your role:</option>
                        <option value='Cat Wrangler'>Cat Wrangler</option>
                        <option value='Cartographer'>Cartographer</option>
                        <option value='Sail Maker'>Sail Maker</option>
                    </select>
            </label>
            <input className='subButton' disabled={!props.values.name || !props.values.email || !props.values.role} type='submit' value='Get a team started!' />
        </form>
    )
}
export default Form;