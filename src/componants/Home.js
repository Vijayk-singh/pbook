import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='preview'>
       
        <div>
     <div className='header'>  <Link to='/'>PhoneBook</Link></div>
     <div className='search'>
     <input type='search' placeholder='Search here'></input>
     
     </div>
     <div className="addbtn">
     <Link to='/add' >+ Create new contact</Link>
     </div>
     
       
        <Outlet />
        </div>
       
    </div>
  )
}

export default Home