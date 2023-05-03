//
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" Component={Home}/>
        < exact path="/post/:postId" Component={PostDetail}/>
        <Route exact path="/create-post" Component={CreatePost}/>
      </Switch>
      <h1>Starting Blog Using Hooks </h1>
    </div>
  );
}

export default App;
