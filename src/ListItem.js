import React, { useEffect,useState } from 'react'
import { Toast } from 'reactstrap'
import { Form, FormGroup, Label, Input, Col, Row, Button, FormText, Container } from 'reactstrap'
import './App.css'
import { acceptJob, rejectJob } from './helper/apiCalls'

const ListItem = ({jobData}) => {
	const[rej,setRej] = useState("");
	const changehandler=(e)=>{
		setRej(e.target.value)
		reject()
	  }
	useEffect(() => {
		console.log("jobData",jobData)
	
	},  [jobData])
	console.log("jobData",jobData)
	const accept=()=>{
		acceptJob({userId:jobData.userId,jobId:jobData._id})
		.then(res => {
			Toast("Sent!!")
		})
	}
	const reject=()=>{
		rejectJob({userId:jobData.userId,jobId:jobData._id,reason:rej})
		.then(res => {
			Toast("Rejected")
		})
	}
	var map3 = [
		{name:"SELECT REJECT REASON"},
		{name:"NOT IN MY DOMAIN"},
		{name:"BUDGET ISSUE"},
	];

	
	return (
	  <div style = {{color:'black'}}>
		  <div className="doctor-card mt-3" style={{backgroundColor:'#e8eced'}}>
		  <div className="info">
			  <div className="avatar">
				  <img src="//via.placeholder.com/200" alt="doc name"/>
			  </div>
		<div className="details">
			<div className="name text-start"><span className="heading font-italic">{jobData?.tags[0]}</span></div>
			<div className="meta-info text-start">
			  <span>{jobData?.description}</span>
			</div>
		</div>
		  </div>
		  <div className="actions">
			  
			  <div className="comments" style={{height:"50px"}}>
				  <span className="comment-count"><strong style={{color:'black'}}>{jobData.budget}</strong> <span style={{color:'black'}}>Budget</span></span>
			  </div>
			  <div className="consultation">
				  <span className="fee"><strong style={{color:'black'}}>Gurugram</strong><span style={{color:'black'}}>Budget</span></span>
			  </div>
			  <div className="appo" onClick = {accept}>
				  <a href="#" className="btn bg-success text-white" style={{width:150,height:55}}>Accept Job</a>
			  </div>
			  {/* <div className="appo" onClick = {reject}>
				  <a href="#" className="btn bg-danger text-white" style={{width:150,height:55}}>Reject Job</a>
			  </div> */}
		<FormGroup className='mb-5'>
          <Label for="exampleSelect" className='mb-5'>
          <span className = "text-light">Reject</span>
          </Label>
          <Input
            id="exampleSelect"
            name="Select Reject Reason"
            type="select"
            value={rej}
            className='former'
            onChange={changehandler}
			style = {{marginBottom:70,backgroundColor:"red",color:"white" , height:53 , width:300}}
          >
            {
              map3?.map((each)=>
              <option>
              {each.name}
              </option>
              )
            }
          </Input>
        </FormGroup>
		  </div>
		  
	  </div>
	  </div>
	)
  }

export default ListItem