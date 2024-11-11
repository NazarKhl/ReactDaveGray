import React from "react";

export default function SearchItem({ search, setSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        role="searchbox"
        id="search"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
