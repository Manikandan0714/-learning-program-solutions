import React from 'react';

const blogs = [
  { id: 1, title: 'React vs Vue', author: 'Sarah' },
  { id: 2, title: 'State Management Tips', author: 'Alex' },
  { id: 3, title: 'JS Debugging Secrets', author: 'Ravi' }
];

function BlogDetails() {
  return (
    <div className="card">
      <h3>Recent Blogs</h3>
      <ul>
        {blogs.map(({ id, title, author }) => (
          <li key={id}>📰 <strong>{title}</strong> by <span>{author}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
