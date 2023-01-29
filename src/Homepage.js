import React,{useState,useEffect} from 'react'
import './App.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Form_info from './Form_info'
import { createJob, login,getJobs } from './helper/apiCalls'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const router =useNavigate();
  const [values,setValues] = useState({
    email:"testemail766@gmail.com",
    password:"1234"
  })
  const [userId,setUserId] = useState("")
  const {email,password} = values;
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [tags,setTags] = useState([]);
  const [subtags,setSubtags] = useState([]);
  const [budget,setBudget] = useState(100);
  const [isFormVisible,setIsFormVisible]=useState(false)
  const [searchText,setSearchText] = useState("")

  useEffect(() => {
    return () => {
      //  onSubmit()
    };
  }, [])
  const onCreateJob = event => {
    event.preventDefault();
    createJob({title,userId,description,tags,subtags,budget})
    .then(res => {
      console.log(res);
    })
    .catch(console.log("signin request failed!!"))
  } 
  const getJob = event => {
    // event.preventDefault();
    getJobs({userId})
    .then(res=> {
      console.log(res);
    })
    .catch(console.log("failed to fetch jobs!"))
  }
  const onSubmit = event => {
    // event.preventDefault();
    setValues({...values})
    login({email,password})
    .then(res => {
      console.log(res);
      setValues({
        ...values
      })
      setUserId(res.data._id)
    })
    .catch(console.log("signin request failed!!"))
  }
  return (
    <>
      <div>
        <div className="container">
        <form onSubmit={()=>setIsFormVisible(true)}  className="search-bar" target="_blank">
            <input value={searchText} onChange = {e => setSearchText(e.target.value)} type="text" placeholder="Search any thing..." name="q"/>
            <button onClick={onSubmit} style={{marginTop:"20px"}} type="submit"><AiOutlineArrowRight/></button>
        </form>
        </div>
      </div>

    {isFormVisible && <Form_info search={searchText} userId={userId}/>}
    </>
  )
}

export default Homepage