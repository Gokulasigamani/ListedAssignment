import { useState } from 'react';
import Google from "../assets/google.png";
import mac from "../assets/mac.png";
import IconSec from "./IconSec";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png";

function SignRight() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Basic validation
    let formErrors = {};
    if (!email) formErrors.email = 'Email is required';
    if (!password) formErrors.password = 'Password is required';
    
    if (Object.keys(formErrors).length === 0) {
      // Navigate to the dashboard page if no errors
      navigate('/dashboard');
    } else {
      // Set error messages
      setErrors(formErrors);
    }
  };

  return (
    <>
      {/* Navigation bar for max-sm screens */}
      <nav className="hidden max-sm:flex w-full bg-indigo-500 p-4 fixed top-0 left-0 z-10">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 h-8" alt="Logo" />
          <h1 className="text-white text-xl font-bold">BASE</h1>
        </div>
      </nav>

      <aside className="w-[55%] h-[100%] flex justify-center items-center max-sm:w-full max-sm:justify-start max-sm:pt-24">
        <div className="w-[400px] h-[700px] max-sm:w-full">
          <div className="mt-20 max-sm:ml-4">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <h4 className="mt-2">Sign in to your account</h4>

            <div className="flex gap-5 mt-7 max-sm:flex-row max-sm:gap-2 max-sm:ml-1">
              <div className="w-[300px] h-[35px] rounded-2xl bg-white flex gap-2 items-center justify-center">
                <img src={Google} className="w-[15px]" alt="Google logo" />
                <p className="text-neutral-400 text-[12px]">Sign in with Google</p>
              </div>
              <div className="w-[300px] h-[35px] rounded-2xl bg-white flex gap-2 items-center justify-center">
                <img src={mac} className="w-[15px]" alt="Apple logo" />
                <p className="text-neutral-400 text-[12px]">Sign in with Apple</p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[400px] py-8 m-auto mt-[30px] rounded-3xl max-sm:w-[95%] max-sm:ml-2">
            <div className="sm:w-[350px] max-sm:w-[300px] h-[100%] m-auto px-2">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="text-[14px] font-medium">Email address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-2 bg-neutral-200 px-2 py-2 rounded-lg outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="mt-5">
                  <label htmlFor="password" className="text-[14px] font-medium">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-2 bg-neutral-200 px-2 py-2 rounded-lg outline-none"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                <h2 className="text-[12px] mt-3 ml-1 text-blue-400 font-medium">Forget Password?</h2>
                <button
                  type="submit"
                  className="w-full bg-indigo-500 rounded-lg font-medium text-white py-2 mt-5"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>

          <h2 className="text-[11px] text-neutral-500 font-medium text-center mt-5">
            Don't have an account? <span className="text-blue-500"><a href="">Register here</a></span>
          </h2>

          <IconSec />
        </div>
      </aside>
    </>
  );
}

export default SignRight;
