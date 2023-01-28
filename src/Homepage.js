import React from 'react'
import './App.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Form_info from './Form_info'
const Homepage = () => {
  return (
    <>
      <div>
        <div className="container">
        <form action="https://www.google.com/search" method="get"  className="search-bar" target="_blank">
            <input type="text" placeholder="Search any thing..." name="q"/>
            <button style={{marginTop:"20px"}} type="submit"><AiOutlineArrowRight/></button>
        </form>
        </div>
      </div>

      <Form_info/>
    </>
  )
}

export default Homepage