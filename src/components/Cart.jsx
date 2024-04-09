import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  deleteFromCart,
  selectedItems,
} from "./../redux/cartSlice/index";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const cart = useSelector(selectedItems);
  const dispatch = useDispatch();
  const deletHandler = (id) => {
    dispatch(deleteFromCart(id));
    toast.success("Deleted!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  const clearCartHandler = () => {
    dispatch(clearCart());
    toast.success("Clearrr !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div className="container d-flex flex-column align-items-center">
      <ToastContainer />
      {cart.length == 0 && (
        <>
          <h1 className="text-center my-3">Your Cart is Empty</h1>
          <Link to="/" className="btn btn-danger">
            Continue shopping
          </Link>
        </>
      )}
      <div className="container top">
        {cart.map((item) => (
          <div
            className="container my-3 d-flex justify-content-center"
            key={item.id}
          >
            <div
              className="card mb-3 bg-dark text-light"
              style={{ maxWidth: "640px" }}
            >
              <div className="row g-0">
                <div className="col-md-4 p-3 border-5">
                  <img
                    src={item.imgSrc}
                    className="img-fluid rounded"
                    alt="product-img"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <small className="text-body-light">
                        {item.price} {" ₹"}
                      </small>
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletHandler(item.id)}
                    >
                      - Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <button
          className="btn btn-warning w-25"
          onClick={() => clearCartHandler()}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
