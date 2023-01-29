import React , {useState} from 'react'
import { Form, FormGroup, Label, Input, Col, Row, Button, FormText, Container } from 'reactstrap'
import './App.css'
import { createJob, login,getJobs } from './helper/apiCalls'
import { useNavigate } from 'react-router-dom';

const Form_info = ({search,userId}) => {
  const router =useNavigate();

  var map3 = [
    {name:"Arts & Craft", sub:["Customised Painting" , "Acrylic Painting"]},
    {name:"Pottery", sub:["Pots" , "Wooden" , "Plant Pots" , "Hand-crafted"]},
    {name:"Woolen & Sewing", sub:["Custom sweaters" , "caps" , "muffler"]},
    {name:"HouseHold", sub:["Cleaning" , "Plumbing" , "Gardening"]}
];
const[valueSelect,setValueselect]=useState("");
const[description,setDescription]=useState("xjsvxhjscbscxbss")
const[category,setCategory] = useState("")
const[subcategory,setSubCategory] = useState("")
const[budget,setBudget] = useState(100)
const changehandler=(e)=>{
  setCategory(e.target.value)
  setValueselect(e.target.value);
}
const onCreateJob = event => {
  event.preventDefault();
  console.log({search,userId,description,category,subcategory,budget});
  createJob({search,userId,description,category,subcategory,budget})
  .then(res => {
    console.log(res);
      router("/list")
  })
  .catch(console.log("signin request failed!!"))
}
  return (
    <div style={{
      display: 'flex',
      "justify-content": 'center',
      'align-items': 'center'

      }}>
      <Form>
        <FormGroup className='mt-5'>
          <Label for="exampleSelect">
          <span className = "text-light">Category</span>
          </Label>
          <Input
            id="exampleSelect"
            name="category"
            type="select"
            value={category}
            className='former'
            onChange={changehandler}
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
        <FormGroup className='mt-3'>
          <Label for="exampleSelect">
          <span className = "text-light">Sub-Category</span>
          </Label>
          <Input
            id="exampleSelect"
            name="subcategory"
            type="select"
            value={subcategory}
            className = "former"
            onChange={e=>{
              console.log(e.target.value);
              setSubCategory(e.target.value)}
            }
          >
           {
              map3?.filter(each=> each.name===valueSelect)[0]?.sub?.map((each)=>
              
              <option>
              {each}
              </option>
              )
            }
          </Input>
        </FormGroup>
        <FormGroup className='mt-3'>
          <Label for="Category">
            <span className = "text-light">Budget</span>
          </Label>
          <Input
            id="title"
            name="budget"
            placeholder="Enter Budget in Rupees"
            type="text"
            value={budget}
            className='former'
            onChange={e=>{setBudget(parseInt(e.target.value))}}
          />
        </FormGroup>
        <Button onClick={onCreateJob}>
    Submit
  </Button>
      </Form>
      </div>
      )
}

export default Form_info;