
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Home from './Home';
import {Route , BrowserRouter as Router,  useHistory } from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import { set } from 'date-fns';
import useAxiosFetch from './hooks/useAxiosFetch';
function App() {

  const [posts, setPosts] = useState([])
  const [search,setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const {data, fetchError, isloading} = useAxiosFetch('http://localhost:3500/posts')

  useEffect(()=>{
    setPosts(data)
  },[data])
  useEffect(()=>{
    const filterdposts = posts.filter((post)=>(
      post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase())
      ))
      setSearchResult(filterdposts.reverse())
      
  },[posts,search]) 
  
  return (
    <div className="App">
      <Header title={"Blog App"}/>
      <Nav search={search} setSearch={setSearch} />
        <Switch>
          <Route exact path='/'  >
            <Home posts={searchResult} setPosts={setPosts}/>
          </Route>
          <Route path='/about' >
            <About/>
          </Route>
          <Route exact path='/NewPost'>
            <NewPost posts={posts} setPosts={setPosts}/>
          </Route>
          <Route path='/PostPage/:id'  >
          <PostPage posts={posts} setPosts={setPosts}/>
          </Route>
          <Route path='/*' >
          <Missing/>
          </Route>
        </Switch>

      <Footer/>
    </div>
  );
}

export default App;
