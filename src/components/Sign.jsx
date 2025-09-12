import { useRef, useState } from 'react'
function Sign() {
  const loginEmail = useRef()
  const loginPassword = useRef()
  const signupPassword = useRef()
  const signupEmail = useRef()
  const signupConfirm = useRef()
  const [isActive, setisActive] = useState(true)
  const [succesMessage, setSuccageMessage] = useState('');
  const HendelLogin = (e) => {
    e.preventDefault();
    console.log("click me");

    const login_email = loginEmail.current.value;
    const login_password = loginPassword.current.value;
    if (login_email === '' || login_password === '') {
      alert("All Fields are Mandatory!")
    }
    else {
      alert(`Loggted in as ${login_email} `);
    }
  }
  const HendelSignup = (e) => {
    e.preventDefault();
    const signup_password = signupPassword.current.value;
    const sign_email = signupEmail.current.value;
    const signup_confirm = signupConfirm.current.value;
    console.log(sign_email, signup_confirm, signup_password);

    if (sign_email === '' || signup_confirm === '' || signup_password === "") {
      alert('All Fields are Mandatory!')
    }
    else if (signup_password !== signup_confirm) {
      alert("Passwords do not match!")
    }
    else {
      setSuccageMessage('Signup Successful! 🎉🎉🎉');
      setTimeout(() => setSuccageMessage(''), 3000);
    }
    signupPassword.current.value = "";
    signupEmail.current.value = "";
    signupConfirm.current.value = '';

  }
  return (
    <center>
      <div className='login-section'>
        <div className='login-button'>
          <button className={`${isActive && 'active'}`} onClick={() => setisActive(true)}>Login</button>
          <button className={`${!isActive && 'active'}`} onClick={() => setisActive(false)}>Signup</button>
        </div>
        {isActive ?
          <form onSubmit={HendelLogin}>
            <h2>Login From</h2>
            <input type="email" placeholder='Email Address' ref={loginEmail} />
            <input type="password" placeholder='Password' ref={loginPassword} />
            <span className='checkbox-section'>
              <div className='checkbox'>
                {/* <span><input type="checkbox" name="" id="" /></span> */}
                <input class="form-check-input" type="checkbox" value="" id="checkChecked" />
                <span>Remember me</span>
              </div>
              <div>
                <p> <a href="#">Forgot Password?</a></p>
              </div>
            </span>

            <button type='submit' className='loginSubmit'>Login</button> <br />
            <span>Not a number? <a href="#" onClick={() => setisActive(false)}>SighUp now</a></span>
          </form> :
          <form onSubmit={HendelSignup}>
            <h2>Signup Form</h2>
            <input type="email" placeholder='Email Address' ref={signupEmail} />
            <input type="password" placeholder='Password' ref={signupPassword} />
            <input type="password" placeholder='Confirm password' ref={signupConfirm} />
            <button type='submit' className='loginSubmit'>Signup</button>
          </form>}

      </div>
      {/* success message */}
      <div className={` sec ${!succesMessage ? 'mes' : ''}`}>{succesMessage}</div>
    </center>
  )
}

export default Sign