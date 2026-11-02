"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
        const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const handleFrom = async(userData) =>{
        console.log(userData);
        const {name,photo,email,password} = userData
        const { data, error } = await authClient.signUp.email({
    name: name,// required, The name of the user.
    email: email, 
    password: password,
    image: photo,
    callbackURL: "/"
});
console.log(data, error)
      }  
    return (
       <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form action="" onSubmit={handleSubmit(handleFrom)}>
            <fieldset className="fieldset">
          <label className="label">Your Name</label>
          <input type="name" className="input" placeholder="Name" {...register("name", { required: "Name is required" })} />
           {errors.name && <p role="alert" className="text-rose-500">{errors.name.message}</p>}
          <label className="label">Your Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" {...register("photo", { required: "Photo URL is required" })} />
           {errors.photo && <p role="alert" className="text-rose-500">{errors.photo.message}</p>}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register("email", { required: "Email is required" })} />
           {errors.email && <p role="alert" className="text-rose-500">{errors.email.message}</p>}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("password", { required: "Password is required" })} />
           {errors.password && <p role="alert" className="text-rose-500">{errors.password.message}</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
          <p>Already Have An Account ? Please <Link className="text-red-500" href={'/login'}>Login</Link></p>
        </fieldset>
        </form>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default RegisterPage;