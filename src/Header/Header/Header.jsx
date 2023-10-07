import moment from "moment";

const Header = () => {
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/FJJrczR/night-landscape-with-tree-against-space-sky.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="md:flex items-center justify-between">
              <div>
                {" "}
                <div className="max-w-md text-white">
                  <h1 className="mb-5 text-5xl font-bold">
                    Play Like a <span className="text-pink-500">Pro</span>
                  </h1>
                  <p className="mb-5">Hey Gamer! Welcome to Our Gamer World!</p>
                  <button className="btn bg-blue-700 text-white font-bold">
                    Get Started
                  </button>
                  <div className="text-xl font-bold">
                    {moment().format('LLLL')}</div>
                </div>
              </div>
              <div>
                <img
                  className=""
                  src="https://i.ibb.co/z4WyH7m/skull-with-headphones-neon-circle-removebg-preview-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;