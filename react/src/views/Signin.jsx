import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Login() {
  const mobile_numberRef = useRef();
  const passwordRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const { setUserName, setToken, setCurrentUserID, setUserType } = useStateContext();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const validateForm = () => {
    const mobileNumber = mobile_numberRef.current?.value;
    const password = passwordRef.current?.value;
    setFormValid(mobileNumber?.length > 0 && password?.length >= 6);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!formValid) return;
    
    setIsSubmitting(true);
    setErrors(null);

    const payload = {
      mobile_number: mobile_numberRef.current.value,
      password: passwordRef.current.value,
    };

    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setToken(data.token);
        setUserType(data.userType);
        setUserName(data.userName);
        setCurrentUserID(data.encryptedCurrentUserID);
        navigate("/dashboard");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors({ message: response.data.message });
        } else {
          setErrors({ message: "An unexpected error occurred. Please try again." });
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80")',
          opacity: .8,
          zIndex: 0
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <section className="min-h-screen">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
              Etabo
            </Link>
            {/* <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" >This is a project of the students from Bukidnon State University</p> */}
            <div className="w-full bg-white/90 backdrop-blur-sm rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800/90 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {errors && errors.message && (
                  <div 
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" 
                    role="alert"
                    aria-live="polite"
                  >
                    <strong className="font-bold">Error! </strong>
                    <span className="block sm:inline">{errors.message}</span>
                  </div>
                )}
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  We require each user to sign in
                </h1>

                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  <div>
                    <label htmlFor="mobile_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Mobile Number
                    </label>
                    <input
                      ref={mobile_numberRef}
                      id="mobile_number"
                      name="mobile_number"
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your mobile number"
                      required
                      onChange={validateForm}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      ref={passwordRef}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      minLength="6"
                      onChange={validateForm}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    {/* <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                    </div> */}
                    <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    disabled={!formValid || isSubmitting}
                    type="submit"
                    className={`w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                      (!formValid || isSubmitting) ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account yet?{" "}
                    <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
