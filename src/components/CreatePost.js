import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { firestore } from '../firebase';
import { useFormInput } from '../hooks';

function CreatePost() {
  const [loading, setLoading] = useState(false);
  const title = useFormInput('');
  const subtitle = useFormInput('');
  const category = useFormInput('');
  const content = useFormInput('');
  const author = useFormInput('');
  const image = useFormInput('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Check if all required fields are filled out
    if (
      title.value.trim() === '' ||
      subtitle.value.trim() === '' ||
      content.value.trim() === ''
    ) {
      alert('Please fill out all required fields');
      setLoading(false);
      return;
    }

    try {
      // Save post to Firestore
      const docRef = await firestore.collection('posts').add({
        title: title.value,
        subtitle: subtitle.value,
        content: content.value,
        category: category.value,
        author: author.value,
        image: image.value,
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
          <label>Subtitle</label>
          <input type="text" {...subtitle} />
        </div>
        <div className="form-field">
          <label>Category</label>
          <input type="text" {...category} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <div className="form-field">
          <label>Author</label>
          <input type="text" {...author} />
        </div>
        <div className="form-field">
          <label>Image URL</label>
          <input type="text" {...image} />
        </div>
        <button className="create-post-btn" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
