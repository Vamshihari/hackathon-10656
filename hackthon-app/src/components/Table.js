import React, { useState } from "react";
import { nanoid } from "nanoid";
import "../assets/table.css";
import data from "./mock-data.json";
import DeleteData from "./DeleteData";


const Table = () => {
    const [contacts, setContacts] = useState(data);

    const [addFormData, setAddFormData] = useState({
        fullName: "",
        manufacturer: "",
        model: "",
        fuel: "",
        color: "",
        price: "",
        currency: "",
        city: "",
        country: ""
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            manufacturer: addFormData.manufacturer,
            model: addFormData.model,
            fuel: addFormData.fuel,
            color: addFormData.color,
            price: addFormData.price,
            currency: addFormData.currency,
            city: addFormData.city,
            country: addFormData.country,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    };

    return (
        <div className="app-container">
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>MANUFACTURER</th>
                            <th>MODEL</th>
                            <th>FUEL</th>
                            <th>COLOR</th>
                            <th>PRICE</th>
                            <th>CURRENCY</th>
                            <th>CITY</th>
                            <th>COUNTRY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <>
                                <DeleteData
                                    contact={contact}
                                    handleDeleteClick={handleDeleteClick}
                                />
                            </>
                        ))}
                    </tbody>
                </table>
            </form>
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
        </div>
    );
};

export default Table;
