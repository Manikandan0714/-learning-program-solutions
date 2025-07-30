import React, { useState } from 'react';

const courses = [
  { id: 1, title: 'React Basics', platform: 'Coursera' },
  { id: 2, title: 'Advanced JavaScript', platform: 'Udemy' },
  { id: 3, title: 'Frontend with HTML/CSS', platform: 'edX' }
];

function CourseDetails() {
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  return (
    <div className="card">
      <h3>Popular Courses</h3>
      <ul>
        {courses.map(({ id, title, platform }) => (
          <li key={id}>
            🎓 <strong>{title}</strong> on {platform}
            <button onClick={() => setEnrolledCourse(title)}>Enroll</button>
          </li>
        ))}
      </ul>
      {enrolledCourse && (
        <p className="enroll-msg">✅ Enrolled in <strong>{enrolledCourse}</strong> successfully!</p>
      )}
    </div>
  );
}

export default CourseDetails;
