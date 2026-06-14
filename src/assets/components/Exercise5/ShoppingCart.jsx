import { useState } from "react";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // Add Product
  const handleAddProduct = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(),
        name: productName.trim(),
        price: parseFloat(productPrice),
        quantity: 1,
      };

      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
    }
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setProducts(updatedProducts);
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );

    setProducts(updatedProducts);
  };

  // Remove Product
  const removeProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  // Total Price
  const totalPrice = products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h2>Simple Shopping Cart</h2>

      <div>
        <h3>Add a Product</h3>

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />

        <button onClick={handleAddProduct}>
          Add to Cart
        </button>
      </div>

      {products.length > 0 ? (
        <div>
          <h3>Products in Cart</h3>

          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - $
                {product.price.toFixed(2)}

                <div>
                  Quantity:

                  <button
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                  >
                    -
                  </button>

                  {product.quantity}

                  <button
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() =>
                    removeProduct(product.id)
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h4>
            Total Price: ${totalPrice.toFixed(2)}
          </h4>
        </div>
      ) : (
        <p>The cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;