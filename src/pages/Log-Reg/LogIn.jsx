import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LogIn = () => {

  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
      const password = form.get('password');

      setRegisterError("");
      setSuccess("");

      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("Login successful!", {
            position: "top-right",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          navigate(location?.state ? location.state : '/');
          setSuccess("Log In Successfully!");
        })
        .catch((error) => {
          console.error(error);
          setRegisterError(error.message);
        });
        
    };
  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        setSuccess("Log In Successfully!");
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  }

    return (
      <div>
        <div className="hero min-h-screen max-w-6xl mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Welcome to our website! Please enter your login credentials to
                get started.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-900">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-blue-400 text-black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <div className="relative ">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered bg-blue-400 text-black w-full"
                      required
                    />
                    <span
                      className="right-2 top-2.5 absolute"
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <AiFillEye className="text-2xl text-black"></AiFillEye>
                      ) : (
                        <AiFillEyeInvisible className="text-2xl text-black"></AiFillEyeInvisible>
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-pink-500 text-white">Login</button>
                  {
                    <p className="text-center p-1">
                      Don't have an account?{" "}
                      <Link className="text-pink-500 underline" to="/signup">
                        {" "}
                        Register
                      </Link>{" "}
                      now!
                    </p>
                  }
                </div>
                <div className="text-center ">
                  <h1 className="text-center">Or continue with</h1>
                  <button
                    onClick={handleGoogleBtn}
                    className="border px-2 py-1 rounded-lg text-center m-2 w-full flex items-center justify-center gap-1 text-2xl font-bold"
                  >
                    <FcGoogle></FcGoogle>Google
                  </button>
                </div>
                {registerError && (
                  <p className="text-red-500">{registerError}</p>
                )}
                {success && <p className="text-green-500">{success}</p>}
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default LogIn;