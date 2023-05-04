import { Routes, Route } from 'react-router-dom';
import { NavBar, Home, CreatePost, PostDetail } from './index';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:postid" element={<PostDetail />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
