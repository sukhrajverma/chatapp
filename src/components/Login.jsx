import React from 'react'

import $ from 'jquery'
import { useNavigate } from 'react-router-dom';

function Login() {

  let goto = useNavigate();

  async function login(ev){

    ev.preventDefault();

        let phone = $(".phonenumber").val();

        let pass = $(".password").val();

        if( phone && pass){

            //http://localhost/chatapp/backend/apis.php

            let formData = new FormData();
            formData.append('action', 'login');

            formData.append('user_phone', phone);
            formData.append('user_pass', pass);

            let response = await fetch('http://localhost/chatapp/backend/apis.php',{
                method : 'POST',
                body : formData
                
            });

            let result = await response.json();

            if(result.status == 'success'){ console.log(result)
                console.log("Login successful!");
                console.log("Phone:", phone);
                console.log("Password:", pass);
                console.log("User Data:", result.user);
                sessionStorage.setItem('userid', result.user.uid)
                goto('/mambers');
            } else {
                alert("Log In Failed! please try again!");
            }


        } else {
            alert("Enter Value of Phone & Password1");
        }
      


    }


  return (
    <div>
      <div className="">
  <section className="rounded-md p-2 bg-white">
    <div className="flex items-center justify-center my-3">
      <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2"></div>
        
        <p className="mt-2 text-base text-gray-600">
          please enter your Number and password... 
        </p>
        <form className="mt-5" onSubmit={login} id="loginForm">
          <div className="space-y-4">
            
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

export default Login
