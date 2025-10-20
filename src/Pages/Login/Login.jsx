import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    
  const {signIn,setUser} = use(AuthContext);

   const handleLogin =(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({email,password});
    signIn(email,password)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.log(error.message);
    })
   }

    return (
        <div className='flex justify-center  items-center'>
           <div className="card bg-base-100 w-[35%] shrink-0 rounded-[5px] ">
      <div className="card-body px-15">
        <h1 className='text-4xl font-semibold text-center mt-[30px] pb-10 border-b border-base-300 px-5'>Login your account</h1>
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset ">
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Email</label>
          <input type="email" name='email' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your email address" />
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Password</label>
          <input type="password" name='password' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your password" />
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
        <p className='text-[16px] font-semibold text-[#706F6F] text-center'>
          Dont’t Have An Account ? <Link className='text-[#F75B5F] hover:underline' to='/auth/register'>Register</Link>
        </p>
      </div>
      </div>
      </div>
    );
};

export default Login;