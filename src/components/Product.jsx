import { Products } from "./../data.js";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectedItems } from "./../redux/cartSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    toast.success("Item Added", {
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
  const cartItem = useSelector(selectedItems);
  console.log(cartItem);
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="row">
          {Products.map((item) => (
            <div className="container col-md-4 my-3" key={item.id}>
              <div className="card bg-dark" style={{ width: "18rem" }}>
                <div className="p-3 d-flex justify-content-center">
                  <img
                    src={item.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{ borderRadius: "5%" }}
                  />
                </div>
                <div className="card-body text-light">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary mx-3">
                    {item.price} {"₹"}
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => addToCartHandler(item)}
                  >
                    + Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
