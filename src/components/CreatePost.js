import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { firestore } from '../firebase';
import { useFormInput } from '../hooks';

function CreatePost() {
  const [loading, setLoading] = useState(false);
  const title = useFormInput('');
  const subtitle = useFormInput('');
  const content = useFormInput('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // Save post to Firestore
      const docRef = await firestore.collection('posts').add({
        title: title.value,
        subtitle: subtitle.value,
        content: content.value,
        createdAt: new Date(),
      });
      console.log('Post successfully created with ID:', docRef.id);
      setLoading(false);

      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
      setLoading(false);

      // Display an error message to the user
    }
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input type="text" {...title} />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input type="text" {...subtitle} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea name="" id="" cols="30" rows="10" {...content}></textarea>
        </div>

        <button className="create-post-btn" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
