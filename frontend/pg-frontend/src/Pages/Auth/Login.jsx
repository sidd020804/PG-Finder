import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import '../../Styles/Auth2.css'
import '../../Styles/Auth.css'
import { setLogin } from '../../redux/state';
import { useDispatch } from 'react-redux'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      /** get data after fetching **/
      const loggedIn = await response.json();
      if (loggedIn.success) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token
          })
        )
        navigate('/');
        toast.success("User logged in succesfully");
        console.log(loggedIn.success)
      }
      else{
        toast.error(loggedIn.msg);
      }
    } catch (error) {
      console.log("Login Failed");
      toast.error("Something went wrong! please try agian later");
    }
  }
  return (
    <>
      <section className="register-section-2">
        <Toaster position='top-center' reverseOrder={false} />
        <div className="heading">
          <h1>Login Here </h1>
          <h3>Finding the perfect PG has never been easier. With our smart and seamless platform,<br/> you can explore a wide range of PG accommodations that suit your lifestyle and budget. <br/> Compare amenities, check availability, and make informed decisions—all in one place. <br/>
          Log in now to discover the best PG options near you and secure your ideal stay with ease.<br/> Your next home is just a few clicks away!<br/> </h3>
        </div>
        <div className="register-container">
          <form className="register-info" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              name='email'
            // required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              name='password'
            // required
            />

            <button type='submit' className='btn'>Login</button>
          </form>
          <div className="bottom">
            Don't have account in PG FINDER ? <Link to={'/register'}> Register here</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
