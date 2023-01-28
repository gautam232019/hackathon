import React from 'react'
import './App.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Homepage = () => {
  return (
    <div className="container">
    <form action="https://www.google.com/search" method="get"  className="search-bar" target="_blank">
        <input type="text" placeholder="Search any thing..." name="q"/>
        <button style={{marginTop:"20px"}} type="submit"><AiOutlineArrowRight/></button>
    </form>

</div>
  )
}

export default Homepage