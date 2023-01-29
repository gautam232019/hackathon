import React from 'react'
import { CardTitle } from 'reactstrap'
import ListItem2 from './ListItem2'

const customerList = () => {
    const jobData = {
        'tags':'Ramesh Pottery Store',
        'description':'Pottery',
        'budget': '200'
    }
    const jobData1 = {
        'tags':'Bhavesh Canvas Arts',
        'description':'Art & Craft',
        'budget': '500'
    }
    const jobData2 = {
        'tags':'Nagar General Store',
        'description':'Grocery',
        'budget': '100'
    }
    console.log(jobData)
  return (<div>
        <ListItem2 jobData={jobData}/>
        <ListItem2 jobData={jobData1}/>
        <ListItem2 jobData={jobData2}/>
        </div>
  )
}

export default customerList