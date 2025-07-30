import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('');

  const renderContent = () => {
    switch (activeComponent) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p className="info">Select a section to view its content.</p>;
    }
  };

  return (
    <div className="App">
      <h1>📚 Interactive Blogger App</h1>
      <div className="nav-buttons">
        <button onClick={() => setActiveComponent('book')}>📘 Books</button>
        <button onClick={() => setActiveComponent('blog')}>📝 Blogs</button>
        <button onClick={() => setActiveComponent('course')}>🎓 Courses</button>
      </div>
      <div className="section-title">
        {activeComponent && <h2>Currently Viewing: {activeComponent.toUpperCase()}</h2>}
      </div>
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
