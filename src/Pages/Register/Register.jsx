import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
       
 const {createUser,setUser,updateUser} = use(AuthContext);
 const [nameError,setNameError] = useState('');

 const navigate = useNavigate();


    const handleRegister=(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        if (name.length < 5) {
          setNameError("Name should be 5 character");
          return;
        }else{
          setNameError("");
        }
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email,password)
        .then(result => {
            const user = result.user;
            updateUser({
              displayName:name,
              photoURL:photo,
            })
            .then(()=>{
              setUser({...user,
              displayName:name,
              photoURL:photo,
            });
            navigate('/');
            })
            .catch(error => {
              alert(error.message);
              setUser(user);
            })
        })
        .catch(error => {
           console.log(error.message);
        })   
    }

    return (
        <div className='flex justify-center  items-center'>
             <div className="card bg-base-100 w-[35%] shrink-0 rounded-[5px] ">
      <div className="card-body px-15">
        <h1 className='text-4xl font-semibold text-center mt-[30px] pb-10 border-b border-base-300'>Register your account</h1>
       <form onSubmit={handleRegister}>
         <fieldset className="fieldset ">
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Your Name</label>
          <input type="text" name='name' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your name" required />
          {
            nameError && <p className='text-xs text-red-400'>
              {nameError}
            </p>
          }
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Photo URL</label>
          <input type="text" name='photo' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your Photo URL" required />
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Email</label>
          <input type="email" name='email' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your email address" required  />
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Password</label>
          <input type="password" name='password' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your password" required  />
           <label className="label">
         <input type="checkbox"className="checkbox text-xl font-normal text-[#706F6F]" />
         <span>Accept</span> Term & Conditions
        </label>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>

        </fieldset>
       </form>
        <p className='text-[16px] font-semibold text-[#706F6F] text-center'>
                 Already Have An Account ? <Link className='text-[#F75B5F] hover:underline' to='/auth/login'>Login</Link>
               </p>
      </div>
             </div>
        </div>
    );
};

export default Register;