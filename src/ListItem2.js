import React from 'react'
import './App.css'

const ListItem2 = ({jobData}) => {
    console.log(jobData)
  return (
    <div style = {{color:'black'}}>
		  <div className="doctor-card mt-3" style={{backgroundColor:'#e8eced'}}>
		  <div className="info">
			  <div className="avatar">
				  <img src="//via.placeholder.com/200" alt="doc name"/>
			  </div>
		<div className="details">
			<div className="name text-start"><span className="heading font-italic">{jobData.tags}</span></div>
			<div className="meta-info text-start">
			  <span>{jobData.description}</span>
			</div>
		</div>
		  </div>
		  <div className="actions">
			  
			  <div className="comments" style={{height:"50px"}}>
				  <span className="comment-count"><strong style={{color:'black'}}>{jobData.budget}</strong> <span style={{color:'black'}}>Budget</span></span>
			  </div>
			  <div className="consultation">
				  <span className="fee"><strong style={{color:'black'}}>Gurugram</strong><span style={{color:'black'}}>Location</span></span>
			  </div>
			  <div className="appo" onClick = {()=>{}}>
				  <a href="#" className="btn btn-lg bg-success text-white" style={{width:200,height:55}}>Confirm</a>
			  </div>
			  {/* <div className="appo" onClick = {reject}>
				  <a href="#" className="btn bg-danger text-white" style={{width:150,height:55}}>Reject Job</a>
			  </div> */}
		{/* <FormGroup className='mb-5'>
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
        </FormGroup> */}
		  </div>
		  
	  </div>
	  </div>
  )
}

export default ListItem2