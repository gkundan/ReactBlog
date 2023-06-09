import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { firestore } from '../firebase';

// Create a Title component that'll render an <h1> tag with some styles
const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

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
      <BlogHeading style={styles.heading}>Tech Blog</BlogHeading>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
          <div id="blog-by">{post.author}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;

// inline css

const styles = {
  heading: {
    marginTop: 20,
    fontSize: 29,
    fontWeight: 900,
  },
};
