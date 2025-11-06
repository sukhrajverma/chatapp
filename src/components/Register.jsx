import React from 'react'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';

 function Register() {

    let goto = useNavigate();

    async function save(ev){
        ev.preventDefault();

        let uname = $(".username").val();

        let phone = $(".phonenumber").val();

        let pass = $(".password").val();

        if(uname && phone && pass){

            //http://localhost/chatapp/backend/apis.php

            let formData = new FormData();
            formData.append('action', 'register');
            formData.append('user_name', uname);
            formData.append('user_phone', phone);
            formData.append('user_pass', pass);

            let response = await fetch('https://abhyuday.fivedollarsaas.com/apis/chatapis/apis.php',{
                method : 'POST',
                body : formData
                
            });

            let result = await response.json();

            if(result.status == 'success'){

                goto('/login');

            } else {
                alert("Registration Failed! please try again!");
            }

        } else {
            alert("Enter Value of Name , Phone & Password1");
        }


    }

    function login(){
      
      goto('/login');

    }

  return (
    <div>

<div className="">
  <section className="rounded-md p-2 bg-white">
    <div className="flex items-center justify-center my-3">
      <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2"></div>
        <h2 className="text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Already have an account? 
        </p>
        <form className="mt-5" onSubmit={save} id="registerForm">
          <div className="space-y-4">
            <div>
              <label className="text-base font-medium text-gray-900">
                User Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="Full Name"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 username"
                  name="user_name"
                />
              </div>
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  placeholder="XXXXXXXXX"
                  type="number"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 phonenumber"
                  name="phone"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 password"
                  name="password"
                />
              </div>
              
            </div>
            <div>
              <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <div>
              <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="subuttonbubmit" onClick={login()}
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

      
    </div>
  )
}

export default Register
