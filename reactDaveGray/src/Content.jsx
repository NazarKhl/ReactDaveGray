import React from "react";

export default function Content(){
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick1 = () => {
            console.log("You clicked");
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick1}>Click it</button>
            <button onClick={() => handleClick2("My name")}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    )
}