import React from "react";
import { useState } from "react";
import itemList from "./itemList";

export default function Content({items, handleCheck, handleDelete}) {

  return (
    <main>
      {items.length ? (
        <itemList 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
        ) : (
          <p>List elements is empty</p>
        )}
    </main>
  );
}
