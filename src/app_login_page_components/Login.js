import React from 'react';

const Login = () => {


  return (
    <div>
        <form>
            <p>Email: <input type="text"/></p>
            <p>Password: <input type="password" /></p>
            <p><button type="submit">Login</button></p>
      </form>
    </div>
  )
}

export default Login;