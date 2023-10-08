import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    

    const handleSignUp = (e) => {
      e.preventDefault();
        const form = new FormData(e.currentTarget);
        const fName = form.get('fName');
        const lName = form.get('lName')
      const email = form.get("email");
      const password = form.get("password");
      console.log(fName, lName, email, password);
        
        createUser(fName, lName, email, password)
          .then((result) => {
            console.log(result.user);
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            console.error(error);
          });
    };

    return (
      <div>
        <div>
          <div className="hero min-h-screen max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign-Up now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-900">
                <form onSubmit={handleSignUp} className="card-body">
                  <div className="flex justify-between w-80 gap-1 flex-1">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">
                          First Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="first name"
                        name="fName"
                        className="input input-bordered bg-blue-400 text-black w-40"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Last Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="last name"
                        name="lName"
                        className="input input-bordered bg-blue-400  w-40 text-black "
                        required
                      />
                    </div>
                  </div>
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
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered bg-blue-400 text-black"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-blue-700 text-white">
                      Register
                    </button>
                    {
                      <p className="text-center p-1">
                        Already have an account? Please{" "}
                        <Link className="text-pink-500 underline" to="/login">
                          {" "}
                          LogIn
                        </Link>{" "}
                      </p>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;