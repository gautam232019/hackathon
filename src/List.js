import React,{useEffect, useState} from 'react'
import ListItem from './ListItem'
import {getJobs } from './helper/apiCalls'

const List = () => {
   const [jobs,setJob]=useState([])
    useEffect(() => {
     getJobs({userId:"63d535482e936e736131e5d1"}).then((res)=>{

        setJob(res.data)
        })
        
       
    }, []) 

  return (
    <div>
        {jobs.length > 0 &&  jobs?.filter(j=>j.description).map(job => <ListItem key={job} jobData={job}/>)}
    </div>
  )
}

export default List