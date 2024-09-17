import React, { useContext } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    

    const handleRegister = e => {
        e.preventDefault()
        const form =new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(name,email,password)
        createUser(email,password)
        .then(result => {
            console.log(result)
        })
        .catch( error => {
            console.error(error)
        })
    }

    return (
        <div>
        <Navbar></Navbar>
        <h2>Please Register</h2>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form className="card-body" onSubmit={handleRegister}  >
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </form>
  <p>Have an account <Link to="/login">Login</Link></p>
</div>
</div>
</div>
    </div>
    );
};

export default Register;