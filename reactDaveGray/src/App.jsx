import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

export default function App() {
  const API_URL = "http://localhost:3500/items";

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItmess = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchItmess())();
    }, 500);
  }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
  };

  const handleCheck = async (id) => {
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify({ checked: myItem[0] }),
    };
    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, updateOptions);
    setItems(myItem);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    // debugger
    setItems(listItems);
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
      <main>
        {isLoading && <p>Loading... Please wait!</p>}
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer length={items.length} />
    </>
  );
}
