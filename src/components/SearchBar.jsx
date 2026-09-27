import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-wrapper">
      <div className="search-input-group">
        <img src="/search.svg" alt="Search" className="search-icon-img" />
        <input
          type="text"
          id="search-topics-input"
          className="search-input-box"
          placeholder="Search learning topics (saving, needs, 50/30/20, mistakes, expenses)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary ms-2"
            onClick={() => setSearchTerm('')}
            title="Clear search"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
