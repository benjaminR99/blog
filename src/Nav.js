import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
      <form action="" className='searchForm' onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" placeholder='Search here' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      </form>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/NewPost'>New Post</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>   
    </nav>
  )
}

export default Nav
