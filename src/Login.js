import Header from "./Header";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Response from "react"
function Login() {
    const [Email, setInputName] = useState();
    const [pwd, setPwd] = useState();
    const Navigate = useNavigate();

    const btn_click = () => {
        let user = {
            "email": Email,
            "password": pwd
        }
        fetch('https://reqres.in/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
.then((response) => response.json())

.then((data) => {
  console.log(data);
  if (console.log(data) ) {
    alert("invalid user")
    localStorage.setItem('token', data.token)
  Navigate("/Home")
}  else {
    alert("everything is ok ");
    
}
  
})
        .catch(error =>{
          alert('error')
          console.error( error);
        })
        }
       
    
    return (
        
       <div>
        <Header />
        <div>
            <form>
            <input type="email" autoComplete="username" className="email" onChange={(e) => setInputName(e.target.value)} title="Email" placeholder="Email"/>
            <br/>
            <input type="password" autocomplete="new-password" className="pass" onChange={(e) => setPwd(e.target.value)} placeholder="Password" />
            <br/>
            </form>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => btn_click()} >Login</button>
        <Footer />

       </div>
    )
}
  export default Login;
  