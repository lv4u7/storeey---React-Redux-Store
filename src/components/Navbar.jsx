import { useSelector } from "react-redux";
import { totalPrice, selectedItems } from "./../redux/cartSlice/index";
import { Link } from "react-router-dom";
const Navbar = () => {
  const price = useSelector(totalPrice);
  const cart = useSelector(selectedItems);
  return (
    <>
      <div className="nav-bar sticky-top">
        <Link
          to="/"
          className="left"
          style={{ textDecoration: "none", color: "white" }}
        >
          Storeey
        </Link>
        <div className="mid">
          <button className="btn btn-warning">
            Cart Items Price = {price} ₹
          </button>
        </div>
        <Link to="/cart" className="right">
          <button type="button" className="btn position-relative">
            <span className="material-symbols-outlined cart-ico">
              garden_cart
            </span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
