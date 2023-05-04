import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { firestore } from '../firebase';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = firestore.collection('posts');
        const snapshot = await postsRef.get();

        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Kundan Gupta</div>
      {posts.map((post) => (
        <div className="post" key={post.id}>
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
