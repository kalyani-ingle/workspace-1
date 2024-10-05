import React, { useState } from 'react'


function Productlist({ productID, product_name, product_desc, image, price, addToCart}) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 10));
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 0 : Math.min(Math.max(newQuantity, 1), 10));
  };

  // const handleAddToCart = () => {
  //   if (quantity > 0) {
  //     onAddToCart({
  //       productID,
  //       product_name,
  //       price,
  //       quantity
  //     });
  //   }
  // };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden h-[464px] flex flex-col">
        <img
          src={image || "https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"}
          className="w-full h-51 object-cover"
          alt={product_name}
        />
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-xs text-gray-500 mb-1 mt-1">
            Product ID: {productID}
          </p>
          <div className="mb-2 flex-grow overflow-hidden">
            <h5 className="text-md font-semibold mb-2 line-clamp-2">
              {product_name}
            </h5>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product_desc || "No description available"}
            </p>
          </div>
          <div className="mt-auto">
            <p className="text-md font-bold mb-2">
              MRP: <sup>₹</sup>{price || "Not available"}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label htmlFor="quantity-input" className="mr-2 text-sm">Qty:</label>
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="px-2 h-8 bg-gray-200 rounded-l flex items-center justify-center"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity-input"
                  className="w-12 h-8 text-center border-y focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max="10"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="px-2 h-8 bg-gray-200 rounded-r flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productlist;



