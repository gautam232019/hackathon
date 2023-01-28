import React,{useState} from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Customer from "./img/cust.png"

const Login = () => {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [address,setAddress] = useState("")
  return (
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
                        {/* <button onClick={()=>{}} type="submit" className="btn"><i className="fas fa-sign-in-alt"></i>Sign Up</button> */}
                        <input type="submit" className='btn' value="Signup!!"/>
                    </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login