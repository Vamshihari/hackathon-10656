import React from "react";



const Form = ({handleAddFormChange, handleAddFormSubmit}) => {

    return (

        <div className="app-container">
        <h2>Add a Vehicle</h2>
        <span>All fields are mandatory</span>
        <form onSubmit={handleAddFormSubmit}>
            <label>NAME:</label>
            <input
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                onChange={handleAddFormChange}
            />
            <label>MANUFACTURER:</label>
            <input
                type="text"
                name="manufacturer"
                required="required"
                placeholder="Enter the details..."
                onChange={handleAddFormChange}
            />
            <label>MODEL:</label>
            <input
                type="text"
                name="model"
                required="required"
                placeholder="Enter the model..."
                onChange={handleAddFormChange}
            />
            <label>FUEL:</label>
            <input
                type="text"
                name="fuel"
                required="required"
                placeholder="Enter the fuel type..."
                onChange={handleAddFormChange}
            />
            <label>COLOR:</label>
            <input
                type="text"
                name="color"
                required="required"
                placeholder="Enter the color type..."
                onChange={handleAddFormChange}
            />
            <label>PRICE:</label>
            <input
                type="text"
                name="price"
                required="required"
                placeholder="Enter the price..."
                onChange={handleAddFormChange}
            />
            <label>CURRENCY:</label>
            <input
                type="number"
                name="currency"
                required="required"
                placeholder="Enter the currency..."
                onChange={handleAddFormChange}
            />
            <label>CITY:</label>
            <input
                type="text"
                name="city"
                required="required"
                placeholder="Enter the city..."
                onChange={handleAddFormChange}
            />
            <label>Country:</label>
            <input
                type="text"
                name="country"
                required="required"
                placeholder="Enter the country..."
                onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
        </form>
    </div>
    )

}



export default Form;