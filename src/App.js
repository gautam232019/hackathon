import React,{useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomerSignUp from './customerSignup'
import MerchantSignUp from './merchantSignup'
import Homepage from './Homepage';
import Header from "./Header"
import ListItem from './ListItem'
import PageNotFound from './PageNotFound';
import {Route,Link,BrowserRouter as Router , Switch , Routes} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import {UserContext} from "./context/UserContext"
import Popuper from "./Popuper";


function App() {
  const [user,setUser] = useState(null);

  return (
    <div className="App">
    <Router>
        <ToastContainer/>
        <UserContext.Provider value={{user,setUser}}>
        <Header/>
        

          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/customersignup" element={<CustomerSignUp/>}/>
            <Route exact path="/merchantsignup" element={<MerchantSignUp/>}/>
            <Route exact path="/listitem" element={<ListItem/>}/>
            <Route exact path="*" element={PageNotFound}/>
            <Route exact path = "/logger" element = {<Popuper/>}/>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
