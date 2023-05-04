import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postid } = useParams();

  useEffect(() => {
    console.log('Fetching post with ID:', postid);
    firestore
      .collection('posts')
      .doc(postid)
      .get()
      .then((snapshot) => {
        console.log('Document data:', snapshot.data());
        setPost(snapshot.data());
      });
  }, [postid]);

  console.log('Post:', post);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p>{post.content}</p>
      <p>Category: {post.category}</p>
      <p>Author: {post.author}</p>
      <p>Created at: {post.createdAt?.toDate().toString()}</p>
    </div>
  );
}

export default PostDetail;
