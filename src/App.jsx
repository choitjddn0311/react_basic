import React, { useState, useEffect } from 'react';
import "./style.css"

const App = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h1>json 데이터 뿌리기</h1>
      <ul>
        {Array.isArray(posts) && posts.map((post) => (
          <li key={post.id} className='list'>
            <p>사용자 ID: {post.userId}</p>
            #{post.id} - {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
