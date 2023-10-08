import { Link } from "react-router-dom";



const Cart = ({data}) => {

    const { id, title, image, price } = data;
    return (
      <div>
        <div className="card w-80 h-96 glass">
          <figure>
            <img className="h-52 w-80" src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>
              <span className="text-xl font-bold">{price}</span>
            </p>
            <div className="card-actions flex justify-center">
              <Link to={`/data/${id}`}>
                <button className="btn bg-pink-500 text-white text-center text-xl">
                  Learn now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;