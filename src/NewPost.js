import React, { useState } from 'react'
import format from 'date-fns/format';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NewPost = ({posts,setPosts}) => {
  const[title,setTitle]  = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();
  
  const handleSubmit = () =>{
    
    const NewPost = {
      id : posts[posts.length-1].id +1,
      title : title,
      dateTime :  format(new Date(), 'MMMM dd, yyyy pp'),
      body : body
    }
    const newPosts = [...posts,NewPost]
    setPosts(newPosts)
    history.push('/')
  }

  return (
    <main className='NewPost' onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
        
        <form action="" className='newPostForm'>
          <input type="text"
          placeholder='Post title'
          value={title}
          required
          onChange={(e)=>setTitle(e.target.value)}
           />
           <br />
           <input type="text"
          placeholder='Post Body'
          value={body}
          required
          onChange={(e)=>setBody(e.target.value)}
           />

      
        <button type='submit'>Submit</button>
        </form>
       
    </main>
  )
}

export default NewPost