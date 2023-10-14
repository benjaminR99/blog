import React from 'react'
import Feed from './Feed'
const Home = ({posts,setPosts}) => {


  return (
    <main className='Home'>
      <Feed posts={posts}/>
    </main>
  )
}

export default Home