import React from 'react';
import { useParams } from 'react-router-dom';

const CartDetails = () => {
    const { id, image } = useParams();
    return (
      <div>
        <h1 className="text-3xl text-center text-pink-500 font-bold p-4">
          Game Details:
            </h1>
            <p>{id}</p>
            <img src={image} alt="" />
      </div>
    );
};

export default CartDetails;