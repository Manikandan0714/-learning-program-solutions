import React from 'react';

const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport' },
  { id: 3, title: 'The Alchemist', author: 'Paulo Coelho' }
];

function BookDetails() {
  return (
    <div className="card">
      <h3>Top Book Picks</h3>
      <ul>
        {books.map(({ id, title, author }) => (
          <li key={id}>📖 <strong>{title}</strong> by <em>{author}</em></li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
