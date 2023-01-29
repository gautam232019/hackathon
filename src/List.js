import React,{useEffect, useState} from 'react'
import ListItem from './ListItem'
import {getJobs } from './helper/apiCalls'

const List = () => {
   const [jobs,setJob]=useState([])
    useEffect(() => {
     getJobs({userId:"63d536e824302a6ded1f52f7"}).then((res)=>{

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