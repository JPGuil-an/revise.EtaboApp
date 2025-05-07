import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Login() {
  const mobile_numberRef = useRef();
  const passwordRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const { setUserName, setToken, setCurrentUserID, setUserType } = useStateContext();
  const [errors, setErrors] = useState({
    mobile_number: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);

  const validateForm = () => {
    const mobileNumber = mobile_numberRef.current?.value;
    const password = passwordRef.current?.value;
    setFormValid(mobileNumber?.length > 10 && password?.length >= 5);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!formValid) return;
    
    setIsSubmitting(true);
    setErrors({
      mobile_number: '',
      password: ''
    });

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
          const errorData = response.data;
          setErrors({
            mobile_number: errorData.errors?.mobile_number ? 'Error' : '',
            password: errorData.errors?.password ? 'Error' : ''
          });
          setShowAlert(true);
        } else {
          setErrors({
            mobile_number: 'Error',
            password: 'Error'
          });
          setShowAlert(true);
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
          opacity: 100,
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
            <div className={`w-full bg-white/90 backdrop-blur-sm rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800/90 dark:border-gray-700 transition-all duration-300 ${
              (errors.mobile_number || errors.password) ? 'ring-2 ring-red-500' : ''
            }`}>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {showAlert && (
                  <div className="animate-fade-in-out bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error! </strong>
                    <span className="block sm:inline">Error in password or username</span>
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
                      type="number"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className={`bg-gray-50 border ${
                        errors.mobile_number ? 'border-red-500' : 'border-gray-300'
                      } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="Enter your mobile number"
                      required
                      onChange={validateForm}
                    />
                    {errors.mobile_number && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </p>
                    )}
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
                      className={`bg-gray-50 border ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      required
                      minLength="5"
                      onChange={validateForm}
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                  
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
