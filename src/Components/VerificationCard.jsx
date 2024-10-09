function VerificationCard({ val }) {
  return (
    <div className="Card">
      <div className="">
        <img src={val.img} className="CardImg"></img>
      </div>
      <div className="cardContent"> {val.text}</div>
    </div>
  );
}
export default VerificationCard;
