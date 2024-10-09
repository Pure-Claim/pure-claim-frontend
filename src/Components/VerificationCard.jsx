import { Link } from "react-router-dom";
import "./VerificationCard.css"
function VerificationCard({ val }) {
  return (
    <div className="Card">
      <div className="">
        <img src={val.img} className="CardImg"></img>
      </div>
      <Link to={val.path} className="cardContent btn btn-outline-secondary w-75 mx-auto"> {val.text}</Link>
    </div>
  );
}
export default VerificationCard;
