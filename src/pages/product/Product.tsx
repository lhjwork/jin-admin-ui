import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./product.scss";
const Product = () => {
  // Fetch data and send to Single Component
  return (
    <div className="product">
      <Single {...singleUser} />
    </div>
  );
};

export default Product;
