import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Login() {
  const mobile_numberRef = createRef();
  const passwordRef = createRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUserName, setToken, setCurrentUserID, setUserType } =
    useStateContext();
  const [errors, setErrors] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      mobile_number: mobile_numberRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setIsSubmitting(false);
        setToken(data.token);
        setUserType(data.userType);
        setUserName(data.userName);
        setCurrentUserID(data.encryptedCurrentUserID);

      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          const errorMessage = response.data.message; // Get the error message from the response
          setErrors({ message: errorMessage }); // Set the error state with the error message
        }
        setIsSubmitting(false);
      });
  };
  return (
    <div>
      <section className="bg-red-50 dark:bg-red-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Etabo
          </a>
          {/* <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" >This is a project of the students from Bukidnon State University</p> */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {errors && errors.message && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Error! </strong>
                  <span className="block sm:inline"> Password or Number given is invalid.</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  </span>
                </div>
              )}
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                We require each user to sign in
              </h1>

              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="mobile_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile Number</label>
                  <input
                    ref={mobile_numberRef}
                    id="mobile_number"
                    name="mobile_number"
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password"
                    ref={passwordRef}
                    id="password"
                    name="password"

                    placeholder="********"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
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
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button
                 disabled={isSubmitting}
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in
                  </button>
{/* this is edited */}
                        {/* <button
                          type="submit"
                          classNameName={`w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-2 ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                          disabled={isSubmitting}
                        >Sign in</button> */}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
