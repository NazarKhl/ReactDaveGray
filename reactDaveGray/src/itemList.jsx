import React from "react";

export default function itemList({ items, handleCheck, handleDelete }) {
  return (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label onDoubleClick={() => handleCheck(item.id)}>
                {item.item}
              </label>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
    </ul>
  );
}
