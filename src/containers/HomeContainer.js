import Home from "./components/Home";
import { connect } from "react-redux";
import { addToCart } from "../service/actions/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
// export default Home;
export default connect(mapStateToProps.mapDispatchToProps)(Home);
