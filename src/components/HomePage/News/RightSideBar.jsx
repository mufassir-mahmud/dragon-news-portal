"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const RightSideBar = () => {
const handleGoogleSignIn = async () => {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });

  if (error) {
    console.error("Google login failed:", error.message);
  }
};  
  return (
        <div>
            <h2 className='font-semibold mb-4'>Login With</h2>
            <div className='flex flex-col gap-3'>
                
{/* Google */}

<button className="btn bg-white text-black border-[#e5e5e5] w-8/12" onClick={handleGoogleSignIn}>
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

{/* Facebook */}
<button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-8/12">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  Login with Facebook
</button>
            </div>
            <div className='my-6'>
<h2 className='font-semibold mb-4'>Find Us On</h2>
<div className=' flex flex-col gap-2'>
    
{/* Google */}
<button className="btn bg-white text-black border-[#e5e5e5] w-8/12">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

{/* Facebook */}
<button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-8/12">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  Login with Facebook
</button>
<button className="btn bg-black text-white border-black w-8/12">
  <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/></svg>
  Login with X
</button>
</div>
            </div>
        </div>
    );
};

export default RightSideBar;