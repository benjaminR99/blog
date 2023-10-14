import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Post = ({post}) => {
  return (
    <article className='post'>
        <Link to={`PostPage/${post.id}`}>
        <h2>{post.title}</h2> </Link>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>{(post.body.length)<25 ? post.body : post.body.substring(0,25) + "..."}</p>
    </article>
  )
}

export default Post