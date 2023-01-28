import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Customer from "./img/cust.png"
import SubCat from "./subCat"
const MerchantSignup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [address,setAddress] = useState("")
    const [category,setCategory] = useState("")
    const [subCategory,setSubCategory] = useState("")
    const [about,setAbout] = useState("")

  return (
    <div>
        <div>
        <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                       <div className="col-12 user-img">
                           <img className="user-img" src={Customer}/>
                           {/* https://assets.codepen.io/9277864/PF.png */}
                       </div>
                    <form className="col-12">
                        <div className="form-group">
                         <input value={name} type="name" onChange={e => setName(e.target.value)} className="form-control" placeholder="Enter Your Name.."></input>
                        </div>
                        <div className="form-group">
                         <input value={email} type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter Your Email.."></input>
                        </div>
                        <div className="form-group">
                         <input value={address} type="address" onChange={e => setAddress(e.target.value)} className="form-control" placeholder="Enter Your Address.."></input>
                        </div>
                        <div className="form-group">
                         <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Create a Password"></input>
                        </div>
                        <div>
                        <label className='label'>
                          Choose your category?
                        </label>
                       </div>
                       <div>
                          <select className='category' value={category}  onChange={(e)=>{setCategory(e)}}>
                            <option value="fruit">Fruit</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="meat">Meat</option>
                          </select>
                       </div>
                       {category ? 
                       <SubCat/> 
                       : <></>}
                        {/* <button onClick={()=>{}} type="submit" className="btn"><i className="fas fa-sign-in-alt"></i>Sign Up</button> */}
                        <input type="submit" className='btn' value="Signup!!"/>
                    </form>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default MerchantSignup