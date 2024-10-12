import { Link } from "react-router-dom";
function VerificationCard({ val }) {
  return (
    <div className="Card ">
      <div className="">
        <img src={val.img} className="CardImg"></img>
      </div>
      <Link
        to={val.path}
        className="cardContent btn btn-outline-secondary w-75 mx-auto mb-2 ">
        {" "}
        {val.text}
      </Link>
    </div>
  );
}
export default VerificationCard;
