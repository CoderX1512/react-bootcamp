import React, { useState } from "react";

const LocalStorageExample = () => {
    const [name, setName] = useState("");
    const [storedName, setStoredName] = useState(
        localStorage.getItem("userName") || ""
    );

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSaveName = () => {
        localStorage.setItem("userName", name);
        setStoredName(name);
    };

    const handleClearName = () => {
        localStorage.removeItem("userName");
        setStoredName("");
    };

    return (
        <div>
            <h1>Local Storage Example</h1>
            <p>Stored Name: {storedName || "No name stored"}</p>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
            />
            <button onClick={handleSaveName}>Save Name</button>
            <button onClick={handleClearName}>Clear Name</button>
        </div>
    );
};

export default LocalStorageExample;
