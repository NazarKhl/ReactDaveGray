import React from "react";
import { useState } from "react";

export default function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // debugger
    localStorage.setItem('Shopping list', JSON.stringify(listItems))
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    // debugger
    setItems(listItems);
    localStorage.setItem('Shopping list', JSON.stringify(listItems))
  }

  return (
    <main>
        {items.length ? (
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
        ) : (
            <p>List elements is empty</p>
        )} 
    </main>
  );
}
