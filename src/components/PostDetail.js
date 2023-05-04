import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postid } = useParams();

  console.log('postid', postid);

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
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
