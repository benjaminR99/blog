import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const PostPage = ({posts,setPosts}) => {

    const {id} = useParams()
    const SelectedPost = posts.find((post)=>(
      post.id == id
    ))
    const history = useHistory();

    const handledelete = (e) =>{
      e.preventDefault();
      const newPosts = posts.filter((post)=>(post.id!=id));
      console.log(newPosts)
      setPosts(newPosts);
      history.push('/')
    }
    
    return (
    <main className='PostPage'>
        {console.log(posts)}
       {SelectedPost ? 
       <div>
        <h2>{SelectedPost.title}</h2>
        <p className='postDate'>{SelectedPost.DateTime}</p>
        <p className='postBody'>{SelectedPost.body}</p>
        
        <button 
          onClick={(e)=>{handledelete(e)}}
        >Delete Post</button>
       
       </div>

        :
       <p>No such post exists</p>} 
        
    </main>
  )
}

export default PostPage