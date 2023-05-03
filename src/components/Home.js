import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { firestore } from '../firebase';

function Home() {
  const [posts, setPost] = useState([]);

  // get the data from Firestore using useEffect
  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then((snapshot) => {
        // map through the documents and extract data
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id, // get document ID
            ...doc.data(), // get document data
          };
        });
        console.log('posts', posts);
        setPost(posts); // update state with posts data
      });
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Kundan Gupta</div>
      {/* loop through posts and render each post */}
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          {/* link to post detail page */}
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
