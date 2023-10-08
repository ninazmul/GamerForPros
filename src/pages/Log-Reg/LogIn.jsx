import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const LogIn = () => {

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
      const password = form.get('password');
      signIn(email, password)
        .then((result) => {
          console.log(result.user);

          navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
          console.error(error);
        });
        
    };

    return (
      <div>
        <div className="hero min-h-screen max-w-6xl mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
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
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered bg-blue-400 text-black"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-700 text-white">Login</button>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;