import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Shopping list"))
  );

  const addAndSaveFunc = (newItems) => {
    setItems(newItems);
    localStorage.setItem("Shopping list", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    addAndSaveFunc(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    addAndSaveFunc(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    // debugger
    addAndSaveFunc(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <Header titles="Task List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}
